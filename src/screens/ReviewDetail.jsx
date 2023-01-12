import styled from '@emotion/native';
import { SCREEN_HEIGHT } from '../util';
import { Feather } from '@expo/vector-icons';
import { useQuery } from 'react-query';
import { getMusicalData } from '../api';

export default function ReviewDetail({
  navigation: { navigate },
  route: {
    params: { review, from },
  },
}) {
  const goToReviewEdit = () => {
    navigate('ReviewEdit', { review, from });
  };

  return (
    <Container>
      {/* 정보 */}
      <Row>
        <Rating>⭐️{review?.rating}/5</Rating>
        <EditBtn onPress={goToReviewEdit}>
          <Feather
            name="edit"
            size={30}
            color={(props) => props.theme.fontColor}
          />
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
  /* color: ${(props) => props.theme.fontColor}; */
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
