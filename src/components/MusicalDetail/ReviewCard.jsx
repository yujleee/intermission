import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import DropShadow from 'react-native-drop-shadow';


export default function ReviewCard({review}) {
  const { navigate } = useNavigation();
  const goToReviewDetail = () => {
    navigate('ReviewDetail',{review, from:'MusicalDetail'})
  }
  
  return (
    <DropShadow
      style={{
        shadowColor: '#219BB6',
        shadowOffset: {
          width: 1,
          height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
      }}
    >
      <ReviewContent
        onPress={goToReviewDetail}
      >
        {/* 글자수 자르기 해야함~!
            {movie.title.slice(0, 11)}
          {movie.title.length > 11 && "..."} */}
        <Row>
        <Rating>⭐️{review?.rating}/5</Rating>
        <ReviewDate>{new Date(review?.createdAt).toLocaleDateString('kr')}</ReviewDate>
        </Row>
        
        <Text>{review?.contents}</Text>
        <Id>닉네임1</Id>
      </ReviewContent>
    </DropShadow>
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
`
// 전체 글자
const ReviewDate = styled.Text`
  font-size: 10px;
  margin-bottom: 5px;
`
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






