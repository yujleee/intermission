import { ActivityIndicator, StyleSheet, View } from 'react-native';
import styled from '@emotion/native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../util';
import { LinearGradient } from 'expo-linear-gradient';
import ReviewCard from '../components/MusicalDetail/ReviewCard';
import { useEffect, useState } from 'react';
import ReviewModal from '../components/Reviews/ReviewModal';
import { useQuery } from 'react-query';
import { BASE_URL, getMusicalData } from '../api';
import { collection, getDocs, query, doc, orderBy } from 'firebase/firestore';
import { authService, dbService } from '../firebase';

export default function MusicalDetail({
  navigation: { navigate },
  route: {
    params: { musicalId },
  },
}) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isMoreButton, setMoreButton] = useState(false);

  const { data: musicalData, isLoading: isLoadingMD } = useQuery(
    ['MusicalData', musicalId],
    getMusicalData
  );

  const [reviews, setReviews] = useState([]); // reviews 추가, 삭제 state
  const reviewsCollectionRef = collection(dbService, 'reviews'); //db의 reviews 컬렉션 가져옴

  const addreview = () => {
    setIsOpenModal(true);
  };
  const getReviews = async () => {
    const q = query(reviewsCollectionRef, orderBy('createdAt', 'desc'));
    const data = await getDocs(q);
    setReviews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getReviews();
  }, []);

  if (isLoadingMD) {
    return (
      <Loader>
        <ActivityIndicator />
      </Loader>
    );
  }
  return (
    <Container>
      <InfoTotalPart>
        {musicalData?.dbs?.db?.map((musical) => (
          <InfoPart key={musicalId}>
            {/* 포스터 이미지 */}
            <InfoImgPart
              style={
                {
                  // width: SCREEN_WIDTH,
                  // height: SCREEN_HEIGHT / 2,
                  // justifyContent: 'flex-end',
                }
              }
            >
              <BackdropImg
                style={StyleSheet.absoluteFill}
                source={{
                  uri: `${musical.poster}`,
                }}
              />
              <LinearGradient
                style={StyleSheet.absoluteFill}
                colors={['transparent', 'black']}
              />
              <Title>{musical.prfnm}</Title>
            </InfoImgPart>
            {/* 정보 */}
            <Information>
              <Info>출연 : {musical.prfcast}</Info>
              <Info>제작 : {musical.prfcrew}</Info>
              <Info>
                공연 기간 : {musical.prfpdfrom}~{musical.prfpdto}
              </Info>
              <Info>공연 장소 : {musical.fcltynm}</Info>
              <Info>러닝타임 : {musical.prfruntime}</Info>
              <Info>관람 연령가 : {musical.prfage}</Info>
            </Information>
            {/* 상세보기 버튼 누르면 상세 이미지 나옴 */}
            <MoreButton
              onPress={() => {
                setMoreButton(!isMoreButton);
              }}
            >
              {isMoreButton ? (
                <TempText>접기</TempText>
              ) : (
                <TempText>상세보기</TempText>
              )}
            </MoreButton>
            {isMoreButton && (
              <MoreDetail>
                <DetailImg
                  style={{ resizeMode: 'stretch' }}
                  source={{
                    uri: `${musical?.styurls[0].styurl[0]}`,
                  }}
                />
              </MoreDetail>
            )}
            {console.log('isMoreButton', isMoreButton)}
          </InfoPart>
        ))}
      </InfoTotalPart>
      {/* 리뷰 */}
      <ReviewPart>
        <ReviewTitlePart>
          <SectionTitle>리뷰</SectionTitle>
          <AddReview onPress={addreview}>
            <AddReviewText>리뷰 작성하기</AddReviewText>
          </AddReview>
        </ReviewTitlePart>

        <Review>
          {reviews.map((value) => (
            <ReviewCard key={value.id} review={value} />
          ))}
        </Review>
        <ReviewModal
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          getReviews={getReviews}
        />
      </ReviewPart>
    </Container>
  );
}

const Container = styled.ScrollView`
  flex: 1;
`;
const InfoTotalPart = styled.View`
  flex: 1;
`;
const InfoPart = styled.View`
  /* 불러올 사진이 사이즈가 다 다르면 똑같이 적용안될 것 같다 */
  /* height: ${SCREEN_HEIGHT / 1.5 + 'px'}; */
  /* justify-content: flex-end; */
  flex: 1;
`;
const InfoImgPart = styled.View`
  flex: 1;
`;
const BackdropImg = styled.Image`
  flex: 1;
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
`;
const Title = styled.Text`
  color: white;
  font-size: 50px;
  font-weight: 600;
  margin-left: 20px;
  margin-bottom: 20px;
`;

// 공연 정보
const Information = styled.View`
  margin: 30px;
  /* flex-direction: row; */
`;
// const DataName = styled.View``;
// const Data = styled.View`
//   padding-left: 15px;
// `;
const Info = styled.Text`
  font-size: 20px;
  padding-bottom: 4px;
`;
const MoreButton = styled.TouchableOpacity`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 40px;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  background-color: #22affc;
  color: white;
`;

// 상세보기 버튼 누르면 나타나는
const MoreDetail = styled.View`
  width: 100%;
  height: 100%;
`;
const DetailImg = styled.Image`
  flex: 1;
  object-fit: cover;
`;
// 리뷰
const SectionTitle = styled.Text`
  font-size: 30px;
  margin-left: 20px;
  vertical-align: middle;
  display: flex;
  align-items: center;
`;
const TempText = styled.Text`
  font-size: 20px;
  color: white;
`;

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

//작성하기 버튼
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

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
