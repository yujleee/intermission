import { View, FlatList } from 'react-native';
import styled from '@emotion/native';
import ReviewCard from './../MusicalDetail/ReviewCard';

export default function myPageWriteBox() {
  const data = [
    // 나중에 파이어베이스에서 받아서 변경 - 더미데이터
    {
      // id는 writer이 아닌 key 값임.
      id: 1,
      text: 'asdasdasdasdasd',
      writer: 'asdasd',
    },
    {
      id: 2,
      text: 'test',
      writer: '123123123',
    },
    {
      id: 3,
      text: 'test다아아ㅏㅏ악',
      writer: 'asdasda',
    },
  ];

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <View>
            <ReviewText>작성한 리뷰</ReviewText>
            <ReviewCard />
          </View>
        </>
      }
      keyExtractor={(item) => item.id}
      data={data}
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
