import { Id, ReviewContent, Text } from '../MusicalDetail/ReviewCard';
import { View } from 'react-native';

const MyPageWrite = ({ users }) => {
  return (
    <View>
      <ReviewContent>
        <Text>{users.text}</Text>
        <Id>{users.writer}</Id>
      </ReviewContent>
    </View>
  );
};

export default MyPageWrite;
