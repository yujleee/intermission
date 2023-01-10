import { View, FlatList } from 'react-native';
import styled from '@emotion/native';
import MyPageWrite from './MyPageWrite';

export default function myPageWrite() {
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
          </View>
        </>
      }
      keyExtractor={(item) => item.id}
      data={data}
      renderItem={({ item }) => <MyPageWrite users={item} />}
    />
  );
}

const ReviewText = styled.Text`
  margin-top: 60px;
  margin-left: 16px;
  font-size: 20px;
`;
