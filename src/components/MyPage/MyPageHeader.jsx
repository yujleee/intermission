import { Profiler, useState } from 'react';
import {
  Platform,
  Pressable,
  Image,
  Button,
  ActivityIndicator,
} from 'react-native';
import styled from '@emotion/native';
import { launchImageLibrary } from 'react-native-image-picker';
import { authService } from '../../firebase';
import { updateProfile } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import Profile from '../../../assets/profile_default.jpg';

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

  // 이미지 추가
  const [response, setResponse] = useState(null);
  const onSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: Platform.OS === 'android',
      },
      (res) => {
        console.log(res);
        if (res.didCancel) return;
        setResponse(res);
      }
    );
  };

  const [loading, setLoading] = useState(false);
  const imageUpload = async () => {
    setLoading(true);
    let imageUrl = null;
    if (response) {
      const asset = response.assets[0];
      const reference = storage().ref(`/profile/${asset.fileName}`); // 업로드할 경로 지정
      if (Platform.OS === 'android') {
        // 안드로이드
        // 파일 업로드
        await reference.putString(asset.base64, 'base64', {
          contentType: asset.type,
        });
      } else {
        // iOS
        // 파일 업로드
        await reference.putFile(asset.uri);
      }
      imageUrl = response ? await reference.getDownloadURL() : null;
    }
    console.log('imageUrl', imageUrl);
    // imageUrl 사용 로직
  };

  return (
    <PageHeader>
      <Pressable
        style={{
          width: 160,
          height: 160,
          borderRadius: 100,
        }}
        onPress={onSelectImage}
      >
        <Image
          src={Profile}
          style={{
            width: 160,
            height: 160,
            borderRadius: 100,
          }}
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
        <LogoutButton onPress={logOutBtn}>
          <LoginButtonText>로그아웃</LoginButtonText>
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
