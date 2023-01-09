import { Text, TextInput, View, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function MyPageHeader() {
  return (
    <ScrollView>
      <Image></Image>
      <Text>닉네임</Text>
      <TouchableOpacity>로그아웃</TouchableOpacity>
    </ScrollView>
  );
}
