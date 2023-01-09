import styled from '@emotion/native';
import MyPageHeader from '../components/myPage/MyPageHeader';
import MyPageWriteBox from '../components/myPage/MyPageWriteBox';

export default function MyPage() {
  return (
    <MyPageWrapper>
      <MyPageHeader />
      <MyPageWriteBox />
    </MyPageWrapper>
  );
}

const MyPageWrapper = styled.ScrollView``;
