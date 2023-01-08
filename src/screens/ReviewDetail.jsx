import { Dimensions } from 'react-native';
import styled from '@emotion/native';


export default function ReviewDetail({navigation: {navigate}}) {
  
  return (
    <Container>
      <View>
        <BackdropImg source={{uri:"https://file.mk.co.kr/meet/neds/2022/12/image_readtop_2022_1171782_16723494025295178.jpg"}} />
        <Title>뮤지컬명</Title>
        <Rating>⭐️4.3/5</Rating>
      </View>
    </Container>
  );
}
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window")
const Container = styled.ScrollView``
const View = styled.View`
  height: ${SCREEN_HEIGHT / 2 +"px"};
  justify-content: flex-end;
`
const BackdropImg = styled.Image`
  width: 100%;
  flex: 1;
`
const Title = styled.Text`
  color: black;
  font-size: 30px;
  font-weight: 600;
`
const Rating = styled.Text`
  color: black;
  margin-top: 10px;
  margin-bottom: 10px;
`