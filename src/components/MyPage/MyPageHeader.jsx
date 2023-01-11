import { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import styled from '@emotion/native';
import * as ImagePicker from 'expo-image-picker';
import ProfileImg from '../../../assets/profile_default.jpg';
import { authService } from '../../firebase';
import { updateProfile } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
//닉네임 수정
export default function MyPageHeader() {
  const onSubmit = async (e) => {
    e.preventDefault();
    if (userName !== newDisplayName) {
      await updateProfile(authService.currentUser, {
        displayName: newNickname ? newNickname : null,
        // photoURL: downloadUrl ? downlodaUrl : null,
      });
    }
  };
  console.log(authService);

  // 이미지 추가
  const [imageUrl, setImageUrl] = useState('');
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  const uploadImage = async () => {
    // 권한 확인 코드 : 권한 없을 떄 물어보고 승인하지 않을 경우 함수 종료
    if (!status?.granted) {
      const permission = await requestPermission();
      if (!permission.granted) {
        return null;
      }
    }
    // 이미지 업로드 기능
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaType: ImagePicker.MediaTypeOptions.Images,
      allowEditing: false,
      quality: 1,
      aspect: [1, 1],
    });
    if (result.cancelled) {
      return null; // 이미지 업로드 취소한 경우
    }
    // 이미지 업로드 결과 및 이미지 경로 업데이트
    console.log(result);
    setImageUrl(result.uri);
  };
  // 로그아웃
  const logout = () => {
    signOut(authService)
      .then(() => {
        console.log('로그아웃 성공');
        Alert.alert('Intermission', '다신 돌아오지마세요.');
        navigate('Home');
      })
      .catch((err) => alert(err));
  };
  // 경고창
  const logOutBtn = () => {
    Alert.alert('Intermission', '로그아웃 하시겠습니까??', [
      {
        text: '예',
        onPress: () => {
          logout();
        },
      },
      { text: '아니오' },
    ]);
  };

  // 네비
  const { navigate } = useNavigation();
  return (
    <PageHeader>
      {/* <MyImage>
        <Image
          style={{
            width: 160,
            height: 160,
            borderRadius: 100,
            margin: 40,
          }}
        />
      </MyImage> */}
      <Pressable style={styles.circle} onPress={uploadImage}>
        <Image
          style={styles.circle}
          source={{ uri: response?.assets[0]?.uri }}
        />
      </Pressable>
      <MyDb>
        <PageId>
          <MyId>닉네임</MyId>
        </PageId>
        {/* <MyButton> */}
        <IdButton>
          <LoginButtonId>닉네임 수정</LoginButtonId>
        </IdButton>
        <LogoutButton>
          <LoginButtonText onPress={logOutBtn}>로그아웃</LoginButtonText>
        </LogoutButton>
        {/* </MyButton> */}
      </MyDb>
    </PageHeader>
  );
}

const PageHeader = styled.View`
  flex-wrap: wrap;
  height: 200px;
`;
const MyDb = styled.View`
  margin-top: 60px;
`;
const MyImage = styled.TouchableOpacity``;

const PageId = styled.Text``;
const MyId = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.fontColor};

  margin-top: 20px;
`;
const IdButton = styled.TouchableOpacity`
  color: ${(props) => props.theme.fontColor};

  justify-content: center;
  width: 110px;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #22affc;
  border-radius: 10px;
`;
const LogoutButton = styled.TouchableOpacity`
  justify-content: center;
  width: 110px;
  height: 40px;
  margin-top: 10px;
  background-color: #22affc;
  border-radius: 10px;
`;
const LoginButtonId = styled.Text`
  color: white;
  font-size: 14px;
  text-align: center;
`;
const LoginButtonText = styled.Text`
  color: white;
  font-size: 14px;
  text-align: center;
`;
