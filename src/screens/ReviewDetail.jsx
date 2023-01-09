import styled from '@emotion/native';
import ReviewCard from '../components/MusicalDetail/ReviewCard';
import { SCREEN_HEIGHT } from '../util';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ReviewDetail() {
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
      <ReviewCard />
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
  // display: block;
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
  margin: 10px 30px;
`;
