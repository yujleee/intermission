import { Text, View, ScrollView } from 'react-native';
import styled from '@emotion/native';
import ReviewCard from '../MusicalDetail/ReviewCard';

export default function MyPageWrite() {
  return (
    <ScrollView>
      <View>
        <ReviewText>작성한 리뷰</ReviewText>
      </View>
      {/* <ReviewCard></ReviewCard> */}
    </ScrollView>
  );
}

const ReviewText = styled.Text`
  display: flex;
  margin-left: 16px;
  font-size: 20px;
`;
