import { FlatList, View } from 'react-native';
import styled from '@emotion/native';
import ReviewCard from '../Reviews/ReviewCard';

export default function myPageWriteBox() {
  // const reviews = Firestore.collection('reviews');

  // reviews.get().then((docs) => {
  //   // 반복문으로 docuemnt 하나씩 확인
  //   docs.forEach((doc) => {
  //     if (doc.exists) {
  //       // document의 데이터
  //       console.log(doc.data());
  //       // document의 id
  //       console.log(doc.id);
  //     }
  //   });
  // });

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <View>
            <ReviewText>작성한 리뷰</ReviewText>
            {/* 사용자의 리뷰 */}
          </View>
        </>
      }

      // renderItem={({ item }) => <MyPageWrite users={item} />}
    />
  );
}

const ReviewText = styled.Text`
  color: ${(props) => props.theme.fontColor};
  margin-top: 60px;
  margin-bottom: 30px;
  margin-left: 16px;
  font-size: 20px;
`;
