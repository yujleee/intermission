import { Profiler, useState } from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import styled from '@emotion/native';
import * as ImagePicker from 'expo-image-picker';
import { authService, storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateProfile } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import defaultimage from '../../../assets/profile_default.jpg';
// import { v4 as uuidv4 } from 'uuid';

export default function MyPageHeader() {
  //닉네임 수정
  const [name, setName] = useState('닉네임');
  const [text, setText] = useState('');

  const changeName = () => {
    setName(text);
    setText();
  };
  const SwitchName = () => {
    Alert.alert('My Proflie', '닉네임을 변경하시겠습니까?', [
      {
        text: '확인',
        onPress: () => {
          Alert.alert('My Proflie', '닉네임이 변경되었습니다.', changeName());
        },
      },
      { text: '취소' },
    ]);
  };

  // 프로필 이미지 변경

  // 이미지 선택&갤러리 (이미지피커)
  const [pickedImg, setPickedImg] = useState('');
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  const pickImage = async () => {
    if (!status?.granted) {
      const permissions = await requestPermission();
      if (!permissions.granted) {
        return null;
      }
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });
    const [{ uri }] = result.assets;
    setPickedImg(uri);
  };

  console.log(pickedImg);
  //이미지 파이어베이스 업로드
  const uploadImage = async () => {
    if (pickedImg) {
      const response = await fetch(pickedImg);
      const blobFile = await response.blob();

      const imageRef = ref(storage, `profile/3`); // / 뒤에 uuid

      if (blobFile) {
        const imageResponse = await uploadBytes(imageRef, blobFile);
        const downloadUrl = await getDownloadURL(imageResponse.ref);
        setPickedImg('');
        console.log(downloadUrl);
        return downloadUrl;
      }
    }
  };

  const [photo, SetPhoto] = useState(defaultimage);
  const onSelectImage = () => {
    Alert.alert('My Profile', '프로필 사진을 변경하시겠습니까?', [
      {
        text: '확인',
        onPress: () => {
          Alert.alert('아직은 안돼요');
        },
      },
      { text: '취소' },
    ]);
  };

  // 로그아웃
  const logout = () => {
    signOut(authService)
      .then(() => {
        console.log('로그아웃 성공');
        Alert.alert('Intermission', '안녕히 가세요.');
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
  // const img = params.img;

  return (
    <PageHeader>
      <MyImage onPress={() => pickImage()} source={photo}>
        <MyProfile
          source={pickedImg ? { uri: pickedImg } : null}
          style={{
            width: 140,
            height: 140,
            borderRadius: 100,
            margin: 30,
          }}
        />
      </MyImage>

      <MyDb>
        <MyNickName>
          <MyId>{name}</MyId>
          <IdButton
            placeholder="변경할 닉네임을 입력해주세요."
            onChangeText={setText}
            value={text}
          />
          <TouchableOpacity Text="수정" onPress={() => uploadImage()}>
            <Text>수정</Text>
          </TouchableOpacity>
        </MyNickName>
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

const MyProfile = styled.Image``;
const MyNickName = styled.View`
  width: 500px;
  height: 100px;
`;

const MyDb = styled.View`
  margin-top: 40px;
  width: 500px;
  height: 700px;
`;
const MyImage = styled.TouchableOpacity``;

const MyId = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.fontColor};
`;
const IdButton = styled.TouchableOpacity`
  justify-content: center;
  width: 170px;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #ddd;
  border-radius: 10px;
`;
const SwitchName = styled.TouchableOpacity`
  width: 170px;
  height: 30px;
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
