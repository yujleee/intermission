import { initializeApp } from 'firebase/app';

import {
  getReactNativePersistence,
  initializeAuth,
} from 'firebase/auth/react-native';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 아래 데이터는 본인의 Firebase 프로젝트 설정에서 확인할 수 있습니다.
const firebaseConfig = {
  // 1번
  // apiKey: 'AIzaSyCblso7NeQilt6uSjED7-QTEeIeNF_tvW4',
  // authDomain: 'intermission-5d999.firebaseapp.com',
  // projectId: 'intermission-5d999',
  // storageBucket: 'intermission-5d999.appspot.com',
  // messagingSenderId: '304885799926',
  // appId: '1:304885799926:web:a71dd478445e9d883fc5d7',

  // 인터미션1
  // apiKey: 'AIzaSyBfitKwBLhiaGp-mEZngLvN30H4cCsZOUQ',
  // authDomain: 'intermission1.firebaseapp.com',
  // projectId: 'intermission1',
  // storageBucket: 'intermission1.appspot.com',
  // messagingSenderId: '723993249716',
  // appId: '1:723993249716:web:71b6eb61ddd380b3d554e1',

  // 인터미션2
  apiKey: 'AIzaSyAvrnx5yZ5PGxoU2fOPb4LGCkwD7CsjZEc',
  authDomain: 'intermission2-71e73.firebaseapp.com',
  projectId: 'intermission2-71e73',
  storageBucket: 'intermission2-71e73.appspot.com',
  messagingSenderId: '363887740964',
  appId: '1:363887740964:web:644a85d1bfbccdcc6c70b1',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app);
export const authService = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const storage = getStorage(app);
