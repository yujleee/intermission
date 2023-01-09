import styled from '@emotion/native';
import { db } from './index.js';
import 'firebase/firestore';
import MyPageHeader from '../components/MyPage/MyPageHeader';
import MyPageWriteBox from '../components/MyPage/MyPageWriteBox';

export default function MyPage() {
  return (
    <MyPageWrapper>
      <MyPageHeader />
      <MyPageWriteBox />
    </MyPageWrapper>
  );
}

const MyPageWrapper = styled.ScrollView``;
