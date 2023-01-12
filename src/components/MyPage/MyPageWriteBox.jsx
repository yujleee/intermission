import { View, FlatList } from 'react-native';
import styled from '@emotion/native';
import ReviewCard from '../Reviews/ReviewCard';

export default function myPageWriteBox() {
  const data = [
    // 나중에 파이어베이스에서 받아서 변경 - 더미데이터
    // 파일 살리기 위해서 잠시 주석추가해서 달아둡니다! 죄송해요 흐아앙
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
