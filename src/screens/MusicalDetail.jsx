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
          source={{ require: '../assets/hero.png' }}
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
        <Text>누가 죄인인가~!</Text>
      </Review>
      <Review>
        <Text>김소현 진짜 좋다 노래 왜이렇게 잘해</Text>
      </Review>
      <Review>
        <Text>명성황후를 시해한 죄~!</Text>
      </Review>
    </Container>
  );
}

const Container = styled.ScrollView``;

const View = styled.View`
  height: ${SCREEN_HEIGHT / 2.5 + 'px'};
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
`;
const MoreButton = styled.TouchableOpacity`
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border-width: 1px;
  align-items: center;
`;
const TempText = styled.Text`
  font-size: 20px;
`;
const AddReview = styled.TouchableOpacity`
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border-width: 1px;
  align-items: center;
`;
const Review = styled.View`
  background-color: lightgray;
  flex-direction: row;
  padding: 20px;
  margin: 10px 20px;
  border-radius: 5px;
`;
