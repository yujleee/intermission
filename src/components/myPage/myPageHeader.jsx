import { Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function MyPageHeader() {
  return (
    <ScrollView>
      <Image></Image>
      <IdTitle>닉네임</IdTitle>
      <TouchableOpacity>로그아웃</TouchableOpacity>
    </ScrollView>
  );
}
