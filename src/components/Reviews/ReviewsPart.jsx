import styled from '@emotion/native';
import ReviewCard from './ReviewCard';
import ReviewModal from './ReviewModal';
import { useState, useEffect } from 'react';
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
} from 'firebase/firestore';
import { authService, dbService } from '../../firebase';
import { useNavigation } from '@react-navigation/native';
import { Empty, EmptyText } from '../Home/LocalMusical/LocalMusicalList';

export default function ReviewsPart({ musicalId }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [reviews, setReviews] = useState([]); // reviews 추가, 삭제 state
  const { navigate } = useNavigation();

  const addreview = () => {
    const isLogin = !!authService.currentUser;
    if (!isLogin) {
      navigate('Login');
      return;
    }
    setIsOpenModal(true);
  };

  useEffect(() => {
    const reviewsCollectionRef = collection(dbService, 'reviews');
    const q = query(
      reviewsCollectionRef,
      where('musicalId', '==', musicalId),
      orderBy('createdAt', 'desc')
    );
    const getReviews = onSnapshot(q, (snapshot) => {
      const newReviews = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(newReviews);
    });
    return getReviews;
  }, []);
  return (
    <ReviewPart>
      <ReviewTitlePart>
        <SectionTitle>리뷰</SectionTitle>
        <AddReview onPress={addreview}>
          <AddReviewText>리뷰 작성하기</AddReviewText>
        </AddReview>
      </ReviewTitlePart>

      <Review>
        {reviews?.length === 0 && (
          <EmptyData>
            <EmptyText>데이터가 없습니다</EmptyText>
          </EmptyData>
        )}
        {reviews.map((value) => (
          <ReviewCard key={value.id} review={value} />
        ))}
      </Review>
      <ReviewModal
        musicalId={musicalId}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
    </ReviewPart>
  );
}
const ReviewPart = styled.View`
  flex: 1;
  margin-top: 30px;
`;
const ReviewTitlePart = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
const SectionTitle = styled.Text`
  font-size: 24px;
  margin-left: 20px;
  font-weight: 600;
  vertical-align: middle;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.fontColor};
`;

export const AddReview = styled.TouchableOpacity`
  margin-right: 20px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.buttonColor};
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 46px;
`;
export const AddReviewText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.buttonTextColor};
`;
// 리뷰
const Review = styled.View`
  min-height: 100px;
  margin: 30px 20px;
`;

const EmptyData = styled(Empty)`
  padding: 20px 0;
  justify-content: center;
  align-items: center;
`;
