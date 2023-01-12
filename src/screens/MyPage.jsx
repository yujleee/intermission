import { useCallback } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import styled from '@emotion/native';
import MyPageHeader from '../components/MyPage/MyPageHeader';
import MyPageWriteBox from '../components/MyPage/MyPageWriteBox';
import { authService } from '../firebase';

export default function MyPage() {
  const { reset } = useNavigation();

  useFocusEffect(
    useCallback(() => {
      if (!authService.currentUser) {
        // 비로그인 상태에서 마이페이지 접근 시 로그인화면으로 이동하고, 뒤로가기 시 무비탭
        // reset은 객체를 인자로 받고 객체안에 property로 index, route를 받음
        reset({
          index: 1,
          routes: [
            {
              name: 'Tabs',
              params: {
                screen: 'Home', // 돌아갈 화면
              },
            },
            {
              name: 'Stacks',
              params: {
                screen: 'Login',
              },
            },
          ],
        });
        return;
      }
    }, [])
  );
  return (
    <MyPageWrapper
      ListHeaderComponent={
        <>
          <MyPageHeader />
          <MyPageWriteBox />
        </>
      }
    />
  );
}

const MyPageWrapper = styled.FlatList``;
