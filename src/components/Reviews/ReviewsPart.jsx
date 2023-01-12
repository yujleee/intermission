import styled from '@emotion/native';
import ReviewCard from './ReviewCard';
import ReviewModal from './ReviewModal'
import { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { authService, dbService } from '../../firebase';
import { useNavigation } from '@react-navigation/native';
// import { collection, onSnapshot, query, orderBy, docs, getDocs } from 'firebase/firestore';
// import { authService, dbService } from '../firebase';


export default function ReviewsPart({ musicalid }) {
  const { navigate } = useNavigation();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [reviews, setReviews] = useState([]); // reviews 추가, 삭제 state

  const addreview = () => {
    const isLogin = !!authService.currentUser;
    if (!isLogin) {
      navigate("Login");
      return;
    }
    setIsOpenModal(true);
  };
  // const reviewsCollectionRef = collection(dbService, 'reviews'); //db의 reviews 컬렉션 가져옴
  // const getReviews = async () => {
  //   const q = query(reviewsCollectionRef, orderBy('createdAt', 'desc'));
  //   const data = await getDocs(q);
  //   setReviews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };
  // useEffect(() => {
  //   getReviews();
  // }, []);
  useEffect(() => {
    const reviewsCollectionRef = collection(dbService, 'reviews');
    const q = query(reviewsCollectionRef, orderBy('createdAt', 'desc'));
    const getReviews = onSnapshot(q, (snapshot) => {
      const newReviews = snapshot.docs.map((doc) => ({
        id: doc.id, ...doc.data(),
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
          {reviews
            .map((( value )=> {
              if(value.musicalid === musicalid){
                return <ReviewCard key={value.id} review={value} />;
              }
            }))}
        </Review>
        <ReviewModal
          musicalid={musicalid}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        />
      </ReviewPart>
    )
};
const ReviewPart = styled.View`
  flex: 1;
  /* justify-content: space-between;
  align-items: center;
  margin-top: 10px; */
`;
const ReviewTitlePart = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
const SectionTitle = styled.Text`
  font-size: 30px;
  margin-left: 20px;
  vertical-align: middle;
  display: flex;
  align-items: center;
`;
const AddReview = styled.TouchableOpacity`
  padding: 10px;
  margin-right: 20px;
  border-radius: 5px;
  background-color: #22affc;
  align-items: center;
  width: 150px;
  height: 45px;
`;
const AddReviewText = styled.Text`
  font-size: 20px;
  color: white;
`;
// 리뷰
const Review = styled.View`
  margin: 30px 20px;
`;