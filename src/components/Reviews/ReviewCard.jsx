import { useNavigation } from '@react-navigation/native';
import styled from '@emotion/native';
import { shadowStyle } from '../../shadow';
import { authService } from '../../firebase';

export default function ReviewCard({ review }) {
  const { navigate } = useNavigation();

  const goToReviewDetail = async () => {
    const isLogin = !!authService.currentUser;
    if (!isLogin) {
      navigate('Login');
      return;
    }

    navigate('ReviewDetail', { review, from: 'MusicalDetail' });
  };

  return (
    <ReviewContent style={shadowStyle.blue} onPress={goToReviewDetail}>
      <Row>
        <Rating>⭐️{review?.rating}/5</Rating>
        <ReviewDate>
          {new Date(review?.createdAt).toLocaleDateString('kr')}
        </ReviewDate>
      </Row>

      <Text numberOfLines={2}>{review?.contents}</Text>
      <Id>{review?.writer}</Id>
    </ReviewContent>
  );
}

export const ReviewContent = styled.TouchableOpacity`
  width: 100%;
  background-color: ${(props) => props.theme.boxColor};
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
`;
export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
// 전체 글자
export const ReviewDate = styled.Text`
  font-size: 14px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.reviewSmall};
`;
export const Rating = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${(props) => props.theme.middleFontColor};
`;
export const Text = styled.Text`
  padding: 10px 0;
  font-size: 18px;
  color: ${(props) => props.theme.fontColor};
`;
export const Id = styled.Text`
  margin-left: auto;
  margin-top: 10px;
  font-size: 16px;
  color: ${(props) => props.theme.middleFontColor};
`;
