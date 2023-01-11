import { ActivityIndicator, StyleSheet, View } from 'react-native';
import styled from '@emotion/native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../util';
import { LinearGradient } from 'expo-linear-gradient';
import ReviewCard from '../components/MusicalDetail/ReviewCard';
import { useState } from 'react';
import ReviewModal from '../components/Reviews/ReviewModal';
import { useQuery } from 'react-query';
import { BASE_URL, getMusicalData } from '../api';

export default function MusicalDetail({
  navigation: { navigate },
  route: {
    params: { musicalId },
  },
}) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isMoreButton, setMoreButton] = useState(false);
  const addreview = () => {
    setIsOpenModal(true);
  };

  const { data: musicalData, isLoading: isLoadingMD } = useQuery(
    ['MusicalData', musicalId],
    getMusicalData
  );

  if (isLoadingMD) {
    return (
      <Loader>
        <ActivityIndicator />
      </Loader>
    );
  }
  return (
    <Container style={{ flex: 1 }}>
      {musicalData?.dbs?.db?.map((musical) => (
        <InfoPart key={musicalId}>
          {/* 포스터 이미지 */}
          <View
            style={{
              width: SCREEN_WIDTH,
              height: SCREEN_HEIGHT / 2,
              justifyContent: 'flex-end',
            }}
          >
            <BackdropImg
              style={StyleSheet.absoluteFill}
              source={{
                uri: `${musical.poster}`,
              }}
            />
            {/* <LinearGradient
              style={StyleSheet.absoluteFill}
              colors={['transparent', 'black']}
            /> */}
            <Title>{musical.prfnm}</Title>
          </View>
          {/* 정보 */}
          <Information>
            <Info>출연 : {musical.prfcast}</Info>
            <Info>
              공연 기간 : {musical.prfpdfrom}~{musical.prfpdto}
            </Info>
            <Info>공연 장소 : {musical.fcltynm}</Info>
            <Info>러닝타임 : {musical.prfruntime}</Info>
            <Info>관람 연령가 : {musical.prfage}</Info>
            <Info>가격 : {musical.pcsequidance}</Info>
          </Information>
          {/* {console.log('styurl나와라', musical?.styurls[0].styurl[0])} */}
          <MoreButton onPress={() => setMoreButton(!isMoreButton)}>
            <TempText>작품 상세 더보기</TempText>
            {console.log('isMoreButton', isMoreButton)}
          </MoreButton>
          {/* 긴 이미지 */}
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
        </InfoPart>
      ))}

      {/* 리뷰 */}
      <ReviewPart>
        <SectionTitle>리뷰</SectionTitle>
        <AddReview onPress={addreview}>
          <AddReviewText>리뷰 작성하기</AddReviewText>
        </AddReview>
      </ReviewPart>

      <Review>
        <ReviewCard />
      </Review>

      <ReviewModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </Container>
  );
}

const Container = styled.ScrollView`
  /* flex: 1; */
`;

const InfoPart = styled.View`
  /* 불러올 사진이 사이즈가 다 다르면 똑같이 적용안될 것 같다 */
  /* height: ${SCREEN_HEIGHT / 1.5 + 'px'}; */
  /* justify-content: flex-end; */
  flex: 1;
`;
const BackdropImg = styled.Image`
  width: 100%;
  flex: 1;
  height: 100%;
  object-fit: cover;
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
