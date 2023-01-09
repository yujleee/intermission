import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import styled from '@emotion/native';

export default function Login() {
  return (
    <BigBrother>
      <TitleText>로그인</TitleText>
      <InputBox>
        <LoginBox placeholder="아이디" />
        <LoginBox placeholder="비밀번호" />
      </InputBox>
      <View>
        <LoginButton>
          <LoginButtonText>로그인</LoginButtonText>
        </LoginButton>
      </View>
      <View>
        <JoinButton>
          <JoinButtonText>회원가입</JoinButtonText>
        </JoinButton>
      </View>
    </BigBrother>
  );
}

const BigBrother = styled.View`
  margin: 150px auto 90px;
  display: flex;
`;

const TitleText = styled.Text`
  font-size: 25px;
  font-weight: 900px;
  margin-bottom: 25px;
`;

const LoginBox = styled.TextInput`
  display: flex;
  justify-content: center;
  background-color: skyblue;
  color: whitesmoke;
  width: 250px;
  height: 60px;
  border-radius: 10px;
  margin-bottom: 30px;
  font-size: 25px;
`;

const InputBox = styled.View`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const LoginButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  width: 120px;
  height: 30px;
  background-color: skyblue;
  border-radius: 10px;
  justify-content: center;
  margin: 0 auto;
`;
const LoginButtonText = styled.Text`
  font-size: 20px;
  color: white;
  text-align: center;
`;

const JoinButton = styled.TouchableOpacity`
  border-radius: 10px;
  width: 100px;
  height: 30px;
  background-color: skyblue;
  justify-content: center;
  text-align: center;
  display: flex;
  margin-top: 100px;
  margin-left: 100px;
`;

const JoinButtonText = styled.Text`
  font-size: 10px;
  color: white;
  text-align: center;
`;
