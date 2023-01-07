import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import styled from '@emotion/native';
import { SCREEN_HEIGHT } from '../util';
import { LinearGradient } from 'expo-linear-gradient';

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
        <Title>
          <Text>영웅</Text>
        </Title>
      </View>
      <Rating>⭐️8/10</Rating>
      {/* 2열로 만들어서 api로 불러온 값은 2번째 열에 넣고 싶다 */}
      <Information>
        <Text>공연 기간 2023.1.7 ~ 2023.2.20</Text>
        <Text>공연 시간 160분</Text>
        <Text>장소 서울 예술의 전당</Text>
        <Text>관람 연령 전체 연령가</Text>
        <Text>제작사 말해도 모름</Text>
        <Text>가격 12만원</Text>
      </Information>
      <MoreButton>
        <TempText>작품 상세 더보기</TempText>
      </MoreButton>
      <SectionTitle>리뷰</SectionTitle>
      <AddReview>
        <TempText>리뷰 작성하기</TempText>
      </AddReview>
      <Review>
        <Text>
          누가 죄인인가~! 이거 보고 국사 시험 잘 봤습니다. 감사합니다. 이번 공연
          놓치지 말고 보세요. 캐스팅 쩐다. 내용이 많아지면 닉네임에 겹쳐질것
          같아서 실험중입니다. 우려한 대로 약간 그렇습니다. 패딩을 주겠습니다.
          그래도 해결되지 않았습니다. 울고있습니다. padding-bottom을 따로 주기
          위해서 하나하나 패딩을 달리 주었습니다. 이래도 엉망인지 보겠습니다. 오
          이젠 해결 된 것 같습니다. 다행입니다. 울음을 멈췄습니다.
        </Text>
        <Id>닉네임1</Id>
      </Review>
      <Review>
        <Text>김소현 진짜 좋다 노래 왜이렇게 잘해</Text>
        <Id>닉네임2</Id>
      </Review>
      <Review>
        <Text>최재림 나오나요?</Text>
        <Id>닉네임3</Id>
      </Review>
      <MoreButton>
        <TempText>리뷰 더보기</TempText>
      </MoreButton>
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
`;
const Title = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: 600;
  margin-left: 20px;
  margin-bottom: 20px;
`;
const Rating = styled.Text`
  font-size: 20px;
  margin: 10px;
`;
const SectionTitle = styled.Text`
  font-size: 30px;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
`;
const Information = styled.View`
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
  flex-direction: row;
`;
const MoreButton = styled.TouchableOpacity`
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border-width: 1px;
  align-items: center;
  /* display: inline-block; */
  /* 한 줄에 꽉 차지 않고 가로 너비가 좀 줄었으면... */
`;
const TempText = styled.Text`
  font-size: 20px;
`;
const AddReview = styled.TouchableOpacity`
  padding: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  border-width: 3px;
  border-color: olive;
  align-items: center;
`;
const Review = styled.View`
  background-color: lightgray;
  flex-direction: row;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 30px;
  margin: 20px;
  border-radius: 5px;
`;
const Id = styled.Text`
  position: absolute;
  right: 0px;
  bottom: 0px;
  margin-right: 10px;
  margin-bottom: 10px;
`;
