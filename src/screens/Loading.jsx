import { ActivityIndicator } from 'react-native';
import styled from '@emotion/native';

export default function Loading() {
  return (
    <Loader>
      <LogoWrapper>
        <Logo source={require('../../assets/logo.png')} />
      </LogoWrapper>
      <ActivityIndicator color={'#22AFFC'} />
    </Loader>
  );
}

const LogoWrapper = styled.View`
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  width: 60%;
  height: 60%;
`;

const Loader = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;
