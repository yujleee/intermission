import { Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function MyPageHeader() {
  return (
    // 커밋을 위해서 잠시 주석을 달아두겠습니다 파일명 앞은 대소문자로~

    <ScrollView>
      <Image></Image>
      <IdTitle>닉네임</IdTitle>
      <TouchableOpacity>로그아웃</TouchableOpacity>
    </ScrollView>
  );
}
