import { ActivityIndicator, StyleSheet } from 'react-native';
import styled from '@emotion/native';
import { SCREEN_HEIGHT } from '../util';
import { LinearGradient } from 'expo-linear-gradient';
import ReviewCard from '../components/MusicalDetail/ReviewCard';
import { useState } from 'react';
import ReviewModal from '../components/Reviews/ReviewModal';
import { useQuery } from 'react-query';
import { getMusicalData } from '../api';

export default function MusicalDetail({
  navigation: { navigate },
  route: {
    params: { musicalId },
  },
}) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const addreview = () => {
    setIsOpenModal(true);
  };

  const { data: musicalData, isLoading: isLoadingMD } = useQuery(
    'MusicalData',
    getMusicalData
  );

  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator />
      </Loader>
    );
  }
  return (
    <Container>
      {musicalData.map((musical) => (
        <View key={musical.mt20id}>
          <View>
            <BackdropImg
              style={StyleSheet.absoluteFill}
              source={require('../../assets/hero.png')}
            />
            <LinearGradient
              style={StyleSheet.absoluteFill}
              colors={['transparent', 'black']}
            />
            <Title>{musical.prfnm}</Title>
          </View>
          <Information>
            <DataName>
              <Text>출연</Text>
              <Text>공연 기간</Text>
              <Text>공연 장소</Text>
              <Text>러닝타임</Text>
              <Text>관람 연령가</Text>
              <Text>가격</Text>
            </DataName>
            <Data>
              <Text>{musical.prfcast}</Text>
              <Text>
                {musical.prfpdfrom}~{musical.prfpdto}
              </Text>
              <Text>{musical.fcltynm}</Text>
              <Text>{musical.prfruntime}</Text>
              <Text>{musical.prfage}</Text>
              <Text>{musical.pcsequidance}</Text>\{' '}
            </Data>
          </Information>
          <MoreButton>
            <TempText>작품 상세 더보기</TempText>
            {/* 이럴수가 접기 버튼도 만들어야 된다 */}
          </MoreButton>
        </View>
      ))}

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

const Container = styled.ScrollView``;

const View = styled.View`
  /* 불러올 사진이 사이즈가 다 다르면 똑같이 적용안될 것 같다 */
  height: ${SCREEN_HEIGHT / 1.5 + 'px'};
  justify-content: flex-end;
`;
const BackdropImg = styled.Image`
  width: 100%;
  flex: 1;
  // display: ;
  width: 100%;
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
  margin: 0 30px 30px 30px;
  flex-direction: row;
`;
const DataName = styled.View``;
const Data = styled.View`
  padding-left: 15px;
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

// 전체 글자
const Text = styled.Text`
  font-size: 20px;
`;

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
