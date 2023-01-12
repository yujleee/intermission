import styled from '@emotion/native';
// import { useNavigation } from '@react-navigation/native';
import { React, useState, useCallback } from 'react';
import { DARK_FONT, LIGHT_FONT } from '../../colors';
import { shadowStyle } from '../../util/shadow';
import { useFocusEffect } from '@react-navigation/native';
import { authService, dbService } from '../../firebase';
import { useNavigation } from '@react-navigation/native';

export default function ReviewCard({ review }) {
  const [reviews, setReviews] = useState([]);

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
      <Id>
        {/* {review?.userId} */}
        닉네임1
      </Id>
    </ReviewContent>
  );
}

//
const ReviewContent = styled.TouchableOpacity`
  width: 100%;
  background-color: ${(props) => props.theme.boxColor};
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
`;
const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
// 전체 글자
const ReviewDate = styled.Text`
  font-size: 14px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.reviewSmall};
`;
const Rating = styled.Text`
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
