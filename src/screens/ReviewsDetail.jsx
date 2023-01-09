import { Dimensions } from 'react-native';
import styled from '@emotion/native';
import { useState } from 'react';
import ReviewModal from '../components/Reviews/ReviewModal';

//공연 상세 페이지
export default function ReviewsDetail({navigation: {navigate}}) {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const addreview = () => {
    setIsOpenModal(true)
  }
  
  return (
    <Container>
      <View>
        <BackdropImg source={{uri:'https://file.mk.co.kr/meet/neds/2022/12/image_readtop_2022_1171782_16723494025295178.jpg'}} />
        <Title>뮤지컬명</Title>
        <Rating>⭐️4.3/5</Rating>
        <BtnView>
        <AddReview onPress={addreview}>
          <BtnText>작성하기</BtnText>
        </AddReview>
        </BtnView>
        <ReviewBox>
          <ReviewBtn>
          <ReviewContent>리뷰~~~</ReviewContent>
        </ReviewBtn>
        </ReviewBox>
      </View>
      <ReviewModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </Container>
  );
}
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')
const Container = styled.ScrollView``
const View = styled.View`
  justify-content: flex-end;
`
const BackdropImg = styled.Image`
  width: 100%;
  height: ${SCREEN_HEIGHT / 2 +'px'};
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
const BtnView = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
`
const AddReview = styled.TouchableOpacity`
  background-color: #22AFFC;
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
`
const BtnText = styled.Text`
  font-size: 20px;
  color: white;
`
const ReviewBox = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`
const ReviewBtn = styled.TouchableOpacity`
  border-radius: 5px;
  margin: 10px;
  background-color: #6bcbe0;
  width: 80%;
  height: 150px;
  align-items: center;
  justify-content: center;
  box-shadow: 10px 5px 5px #82edf5;
`
const ReviewContent = styled.Text`
  font-size: 20px;
  color: black;
`