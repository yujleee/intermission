import { initializeApp } from 'firebase/app';
import {
  getReactNativePersistence,
  initializeAuth,
} from 'firebase/auth/react-native';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// 아래 데이터는 본인의 Firebase 프로젝트 설정에서 확인할 수 있습니다.
const firebaseConfig = {
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
export const authService = getAuth(app);
export const storage = getStorage(app);
