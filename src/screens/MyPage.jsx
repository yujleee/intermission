import { Text, View } from 'react-native';
import myPageHeader from '../components/myPage/myPageHeader';
import myPageWriteBox from '../components/myPage/myPageWriteBox';

export default function MyPage() {
  return (
    <ScrollView>
      <myPageHeader></myPageHeader>
      <myPageWriteBox></myPageWriteBox>
    </ScrollView>
  );
}
