import styled from '@emotion/native';
// import { db } from './index.js';
// import {
//   onSnapshot,
//   query,
//   collection,
//   doc,
//   orderBy,
//   addDoc,
//   getDoc,
//   getDocs,
//   updateDoc,
//   deleteDoc,
// } from 'firebase/firestore';
import MyPageHeader from '../components/MyPage/MyPageHeader';
import MyPageWriteBox from '../components/MyPage/MyPageWriteBox';

export default function MyPage() {
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
