import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SignUp from '../screens/SignUp';
import ReviewDetail from '../screens/ReviewDetail';
import MusicalDetail from '../screens/MusicalDetail';
import ReviewEdit from '../screens/ReviewEdit';

const Stack = createNativeStackNavigator();

export default function Stacks({ navigation: { goBack } }) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity onPress={() => goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="MusicalDetail" component={MusicalDetail} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ReviewDetail" component={ReviewDetail} />
      <Stack.Screen name="ReviewEdit" component={ReviewEdit} />
    </Stack.Navigator>
  );
}
