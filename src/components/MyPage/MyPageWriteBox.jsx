import { Text, View, ScrollView } from 'react-native';
import styled from '@emotion/native';
import ReviewCard from '../MusicalDetail/ReviewCard';

export default function myPageWrite() {
  return (
    <ScrollView>
      <View>
        <ReviewText>작성한 리뷰</ReviewText>
      </View>
      <View>{/* <ReviewCard /> */}</View>
    </ScrollView>
  );
}

const ReviewText = styled.Text`
  display: flex;
  margin-top: 60px;
  margin-left: 16px;
  font-size: 20px;
`;
