import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { shadowStyle } from '../../util/shadow';

export default function ReviewCard({ review }) {
  const { navigate } = useNavigation();
  const goToReviewDetail = () => {
    navigate('ReviewDetail', { review, from: 'MusicalDetail' });
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
  background: #f4fdff;
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
`;
const Rating = styled.Text`
  font-size: 20px;
  margin-bottom: 10px;
`;
const Text = styled.Text`
  font-size: 20px;
`;
const Id = styled.Text`
  margin-left: auto;
  margin-top: 10px;
  font-size: 17px;
`;
