import { Text, TouchableOpacity, View } from 'react-native';

export default function Musicals({ navigation: { navigate } }) {
  return (
    <View>
      <Text>Musicals</Text>
      <TouchableOpacity onPress={() => navigate('MusicalDetail')}>
        <Text>포스터</Text>
      </TouchableOpacity>
    </View>
  );
}
