import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import styled from '@emotion/native';
import { authService } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth/react-native';
import { emailRegex, pwRegex, SCREEN_WIDTH } from '../util';
import { useState, useEffect, useRef } from 'react';
import { Alert } from 'react-native';

export default function Login({
  navigation: { goBack, setOptions, navigate },
}) {
  const emailRef = useRef(null);
  const pwRef = useRef(null);
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const validateInputs = () => {
    if (!email) {
      alert('E-mail을 입력해주세요.');
      emailRef.current.focus();
      return true;
    }
    if (!pw) {
      alert('Password를 입력해주세요.');
      pwRef.current.focus();
      return true;
    }
    const matchedEmail = email.match(emailRegex);
    const matchedPw = pw.match(pwRegex);

    if (matchedEmail === null) {
      alert('이메일 형식에 맞게 입력해 주세요.');
      emailRef.current.focus();
      return true;
    }
    if (matchedPw === null) {
      alert('비밀번호는 8자리 이상 영문자, 숫자, 특수문자 조합이어야 합니다.');
      pwRef.current.focus();
      return true;
    }
  };
  const handleLogin = () => {
    // 유효성 검사
    if (validateInputs()) {
      return;
    }

    // 로그인 요청
    signInWithEmailAndPassword(authService, email, pw)
      .then(() => {
        console.log('로그인 성공');

        Alert.alert('Intermission', '환영합니다.');

        setEmail('');
        setPw('');
        navigate('Home');
        // 로그인 화면 이전 화면으로 돌아가기
      })
      .catch((err) => {
        console.log('err.message:', err.message);
        if (err.message.includes('user-not-found')) {
          alert('회원이 아닙니다. 회원가입을 먼저 진행해 주세요.');
        }
        if (err.message.includes('wrong-password')) {
          alert('비밀번호가 틀렸습니다.');
        }
      });
  };

  const handleRegister = () => {
    // 유효성 검사
    if (validateInputs()) {
      return;
    }

    // 회원가입 요청
    createUserWithEmailAndPassword(authService, email, pw)
      .then(() => {
        console.log('로그인성공');
        Alert.alert('Intermission', '회원가입 완료!');
        setEmail('');
        setPw('');
        goBack();
      })
      .catch((err) => {
        console.log('err.message:', err.message);
        if (err.message.includes('already-in-use')) {
          alert('이미 사용중인 아이디입니다.');
        }
      });
  };

  useEffect(() => {
    setOptions({ headerRight: () => null });
  }, []);

  return (
    <Wrapper>
      <BigBrother>
        <TitleText>로그인</TitleText>
        <InputBox>
          <LoginBox
            ref={emailRef}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholderTextColor="#d2dae2"
            textContentType="emailAddress"
            placeholder="E-mail"
          />
          <LoginBox
            ref={pwRef}
            value={pw}
            onChangeText={(text) => setPw(text)}
            placeholderTextColor="#d2dae2"
            textContentType="password"
            returnKeyType="send"
            secureTextEntry={true}
            placeholder="Password"
          />
        </InputBox>

        <LoginButton onPress={handleLogin}>
          <LoginButtonText>로그인</LoginButtonText>
        </LoginButton>

        <JoinButton onPress={handleRegister}>
          <JoinButtonText>회원가입</JoinButtonText>
        </JoinButton>
      </BigBrother>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  color: ${(props) => props.theme.bgColor};
  padding: 20px 30px;
`;

const BigBrother = styled.View`
  margin: 30px 0;
`;

const TitleText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 25px;
  color: ${(props) => props.theme.fontColor};
`;

const LoginBox = styled.TextInput`
  display: flex;
  justify-content: center;
  border: 1px solid #ccc;
  color: ${(props) => props.theme.fontColor};
  width: ${SCREEN_WIDTH / 1.2 + 'px'};
  height: 46px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 19px;
  padding-left: 10px;
`;

const InputBox = styled.View`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const LoginButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${SCREEN_WIDTH / 1.2 + 'px'};
  height: 46px;
  background-color: ${(props) => props.theme.buttonColor};
  border-radius: 10px;
  margin: 0 auto;
`;
const LoginButtonText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.buttonTextColor};
`;

const JoinButton = styled(LoginButton)`
  background-color: transparent;
  border-width: 1px;
  border-color: ${(props) => props.theme.buttonColor};
  margin: 20px auto 0;
`;

const JoinButtonText = styled(LoginButtonText)`
  color: ${(props) => props.theme.buttonColor};
`;
