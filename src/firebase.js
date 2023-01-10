import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import {
  getReactNativePersistence,
  initializeAuth,
} from 'firebase/auth/react-native';
import { getStorage } from 'firebase/storage';

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

export const authService = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const storage = getStorage(app);
