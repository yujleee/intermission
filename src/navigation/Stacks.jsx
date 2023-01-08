import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Alert } from 'react-native';
import Musicals from '../screens/Musicals';
import ReviewDetail from '../screens/ReviewDetail';
import SignUp from '../screens/SignUp';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export default function Stacks({navigation: { goBack }}) {
  const goAlert = () => Alert.alert("뒤로", "나가시겠습니까?",
    [
      {text: "네", onPress: () => goBack()},
      {text: "아니오", onPress: () => {}}
    ])
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity onPress={() => goAlert()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        )
      }}
    >
      <Stack.Screen name="Musicals" component={Musicals} />
      <Stack.Screen name="ReviewDetail" component={ReviewDetail} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}
