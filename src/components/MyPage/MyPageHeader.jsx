import { Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native';
import styled from '@emotion/native';
import ProfileImg from '../../../assets/profile_default.jpg';

export default function MyPageHeader() {
  return (
    <PageHeader>
      <MyImage>
        <Image
          source={ProfileImg}
          style={{
            width: 160,
            height: 160,
            borderRadius: 100,
          }}
        />
      </MyImage>
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
  flex-wrap: wrap;
  height: 200px;
`;
const MyDb = styled.View`
  display: flex;
  margin-top: 60px;
`;
const MyImage = styled.View`
  margin: 25px;
`;

const PageId = styled.Text``;
const MyId = styled.Text`
  font-size: 20px;
  margin-top: 40px;
`;

const LogoutButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  width: 110px;
  height: 40px;
  margin-top: 10px;
  background-color: #22affc;
`;

const LoginButtonText = styled.Text`
  color: white;
  text-align: center;
`;
