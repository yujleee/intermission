import { StyleSheet, TouchableOpacity } from 'react-native';
import styled from '@emotion/native';
import { SCREEN_HEIGHT } from '../util';
import { LinearGradient } from 'expo-linear-gradient';
import DropShadow from 'react-native-drop-shadow';

export default function MusicalDetail() {
  return (
    <Container>
      <View>
        <BackdropImg
          style={StyleSheet.absoluteFill}
          source={require('../../assets/hero.png')}
        />
        <LinearGradient
          style={StyleSheet.absoluteFill}
          colors={['transparent', 'black']}
        />
        <Title>영웅</Title>
      </View>
      <Rating>⭐️4.5/5</Rating>
      {/* 2열로 만들어서 api로 불러온 값은 2번째 열에 넣고 싶다 */}
      <Information>
        <DataName>
          <Text>공연 기간</Text>
          <Text>공연 시간</Text>
          <Text>장소 서울</Text>
          <Text>관람 연령</Text>
          <Text>제작사</Text>
          <Text>가격</Text>
        </DataName>
        <Data>
          <Text>2022.12.21~2023.2.28</Text>
          <Text>160분</Text>
          <Text>서울 예술의 전당</Text>
          <Text>전체연령가</Text>
          <Text>잘모릅니다</Text>
          <Text>120,000원</Text>
        </Data>
      </Information>
      <MoreButton>
        <TempText>작품 상세 더보기</TempText>
        {/* 이럴수가 접기 버튼도 만들어야 된다 */}
      </MoreButton>
      <ReviewPart>
        <SectionTitle>리뷰</SectionTitle>
        <AddReview>
          <AddReviewText>리뷰 작성하기</AddReviewText>
        </AddReview>
      </ReviewPart>

      <Review>
        <DropShadow
          style={{
            shadowColor: '#219BB6',
            shadowOffset: {
              width: 1,
              height: 5,
            },
            shadowOpacity: 1,
            shadowRadius: 10,
          }}
        >
          <ReviewContent>
            <Text>
              누가 죄인인가~! 이거 보고 국사 시험 잘 봤습니다. 감사합니다. 이번
              공연 놓치지 말고 보세요. 캐스팅 쩐다. 내용이 많아지면 닉네임에
              겹쳐질것 같아서 실험중입니다. 우려한 대로 약간 그렇습니다. 패딩을
              주겠습니다. 그래도 해결되지 않았습니다. 울고있습니다.
              padding-bottom을 따로 주기 위해서 하나하나 패딩을 달리 주었습니다.
              이래도 엉망인지 보겠습니다. 오 이젠 해결 된 것 같습니다.
              다행입니다. 울음을 멈췄습니다.
            </Text>
            <Id>닉네임1</Id>
          </ReviewContent>
        </DropShadow>
        <DropShadow
          style={{
            shadowColor: '#219BB6',
            shadowOffset: {
              width: 1,
              height: 5,
            },
            shadowOpacity: 1,
            shadowRadius: 10,
          }}
        >
          <ReviewContent>
            <Text>김소현 진짜 좋다 노래 왜이렇게 잘해</Text>
            <Id>닉네임2</Id>
          </ReviewContent>
        </DropShadow>
        <DropShadow
          style={{
            shadowColor: '#219BB6',
            shadowOffset: {
              width: 1,
              height: 5,
            },
            shadowOpacity: 1,
            shadowRadius: 10,
          }}
        >
          <ReviewContent>
            <Text>최재림 나오나요?</Text>
            <Id>닉네임3</Id>
          </ReviewContent>
        </DropShadow>
      </Review>
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
  display: block;
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
const Rating = styled.Text`
  font-size: 20px;
  margin: 10px;
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
  margin-bottom: 20px;
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
  margin-top: 20px;
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
  margin: 20px;
`;
// 리뷰 내용 + 아이디
const ReviewContent = styled.View`
  width: 100%;
  background: #f4fdff;
  border-radius: 5px;
  padding: 15px 15px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
`;
const Id = styled.Text`
  right: 0px;
  bottom: 0px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

// 전체 글자
const Text = styled.Text`
  font-size: 20px;
`;
