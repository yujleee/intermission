import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styled from '@emotion/native';
export default function SignUp() {
  return (
    <BigBrother>
      <TitleText>회원가입</TitleText>
      <InputBox>
        <LoginBox placeholder="아이디" />
        <LoginBox placeholder="비밀번호" />
        <LoginBox placeholder="비밀번호 확인" />
      </InputBox>
      <View>
        <JoinButton>
          <JoinButtonText>회원가입</JoinButtonText>
        </JoinButton>
      </View>
    </BigBrother>
  );
}

const BigBrother = styled.View`
  display: flex;
`;

const TitleText = styled.Text`
  font-size: 25px;
  font-weight: 900px;
  margin-bottom: 25px;
`;

const InputBox = styled.View`
  display: flex;
  align-items: center;
  margin: 0 auto;
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
const JoinButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  width: 120px;
  height: 30px;
  background-color: skyblue;
  border-radius: 10px;
  justify-content: center;
  margin: 0 auto;
`;
const JoinButtonText = styled.Text`
  font-size: 20px;
  color: white;
  text-align: center;
`;
