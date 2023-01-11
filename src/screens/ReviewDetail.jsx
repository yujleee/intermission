import styled from '@emotion/native';
import { SCREEN_HEIGHT } from '../util';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { useQuery } from 'react-query';
import { getMusicalData } from '../api';

export default function ReviewDetail({
  navigation: { navigate },
  route: {
    params: { review, from, musicalId },
  },
}) {
  const goToReviewEdit = () => {
    navigate('ReviewEdit', { review, from });
  };

  const { data: musicalData, isLoading: isLoadingMD } = useQuery(
    ['MusicalData', musicalId],
    getMusicalData
  );

  return (
    <Container>
      {/* <Title>{}</Title> */}
      {/* 정보 */}
      <Row>
        <Rating>⭐️{review?.rating}/5</Rating>
        <EditBtn onPress={goToReviewEdit}>
          <Feather name="edit" size={30} color="black" />
        </EditBtn>
      </Row>
      <ReviewBox>
      <Text>{review?.contents}</Text>
      <Id>
        {/* {review?.userId} */}
        닉네임1
      </Id>
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
`;
const Rating = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.fontColor};

  margin: 10px 30px;
`;
const EditBtn = styled.TouchableOpacity`
  color: ${(props) => props.theme.fontColor};
`;
const ReviewBox = styled.View`
  width: 90%;
  background: ${(props) => props.theme.boxColor};
  border-radius: 5px;
  padding: 15px 15px;
  margin: 20px;
  box-shadow: 10px 5px 5px #219bb6;
`;
const Text = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.fontColor};
`;
const Id = styled.Text`
  margin-left: auto;
  margin-top: 10px;
  font-size: 17px;
  color: ${(props) => props.theme.fontColor};
`;
