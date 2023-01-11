import styled from '@emotion/native';
import { SCREEN_HEIGHT } from '../util';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

export default function ReviewDetail({
  navigation,
  route: { params: {review, from} } }) {
  
  const goToReviewEdit = () => {
    navigation.navigate('ReviewEdit', { review, from });
  }

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
      <Row>
        <Rating>⭐️{review?.rating}/5</Rating>
        <EditBtn onPress={goToReviewEdit}>
        <Feather name="edit" size={30} color="black" />
        </EditBtn>
      </Row>
      <ReviewBox>
      <Text>{review?.contents}</Text>
      <Id>닉네임1</Id>
      </ReviewBox>
    </Container>
  );
  }
const Container = styled.ScrollView``;
const View = styled.View`
  /* 불러올 사진이 사이즈가 다 다르면 똑같이 적용안될 것 같다 */
  height: ${SCREEN_HEIGHT / 2 + 'px'};
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
const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-right: 10px;
  margin-top: 20px;
  padding-right: 10px;
`
const Rating = styled.Text`
  font-size: 20px;
  margin: 10px 30px;
`;
const EditBtn = styled.TouchableOpacity`
`
const ReviewBox = styled.View`
  width: 90%;
  background: #f4fdff;
  border-radius: 5px;
  padding: 15px 15px;
  margin: 20px;
  box-shadow: 10px 5px 5px #219BB6;
`
const Text = styled.Text`
  font-size: 20px;
`;
const Id = styled.Text`
  margin-left: auto;
  margin-top: 10px;
  font-size: 17px;
`;