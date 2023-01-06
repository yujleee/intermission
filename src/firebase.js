import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// 아래 데이터는 본인의 Firebase 프로젝트 설정에서 확인할 수 있습니다.
const firebaseConfig = {
  apiKey: 'AIzaSyCblso7NeQilt6uSjED7-QTEeIeNF_tvW4',
  authDomain: 'intermission-5d999.firebaseapp.com',
  projectId: 'intermission-5d999',
  storageBucket: 'intermission-5d999.appspot.com',
  messagingSenderId: '304885799926',
  appId: '1:304885799926:web:a71dd478445e9d883fc5d7',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app);
export const authService = getAuth(app);
