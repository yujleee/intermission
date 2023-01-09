import { Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native';
import styled from '@emotion/native';
// import ProfileImg from '../../../assets/profile_default.jpg';

export default function MyPageHeader() {
  return (
    <PageHeader>
      <View>{/* <ProfileImg /> */}</View>
      <MyDb>
        <PageId>
          <MyId>닉네임</MyId>
        </PageId>

        <LogoutButton>
          <LoginButtonText>로그아웃</LoginButtonText>
        </LogoutButton>
      </MyDb>
    </PageHeader>
  );
}

const PageHeader = styled.View`
  display: flex;
  height: 200px;
`;
const MyDb = styled.View`
  display: flex;
`;
// const ProfileImage = styled.img``;

const PageId = styled.View``;

const MyId = styled.Text`
  font-size: 20px;
  margin-top: 40px;
`;

const LogoutButton = styled.TouchableOpacity`
  display: flex;
  width: 110px;
  height: 40px;
  background-color: #22affc;
`;

const LoginButtonText = styled.Text`
  color: white;
  text-align: center;
`;
