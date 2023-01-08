import styled from '@emotion/native';
import myPageHeader from '../components/myPage/myPageHeader';
import myPageWriteBox from '../components/myPage/myPageWriteBox';

export default function MyPage() {
  return (
    <MyPageWrapper>
      <myPageHeader />
      <myPageWriteBox />
    </MyPageWrapper>
  );
}

const MyPageWrapper = styled.ScrollView``;
