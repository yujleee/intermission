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
    navigate('ReviewDetail');
  };

  return (
    <ReviewContent style={shadowStyle.blue} onPress={goToReviewDetail}>
      {/* 글자수 자르기 해야함~!
            {movie.title.slice(0, 11)}
          {movie.title.length > 11 && "..."} */}
      <Row>
        <Rating>⭐️{review?.rating}/5</Rating>
        <ReviewDate>
          {new Date(review?.createdAt).toLocaleDateString('kr')}
        </ReviewDate>
      </Row>

      <Text>{review?.contents}</Text>
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
  padding: 15px 15px;
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
  font-size: 10px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.fontColor};
`;
const Rating = styled.Text`
  font-size: 20px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.fontColor};
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
