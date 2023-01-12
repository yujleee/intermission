import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ReviewDetail from '../screens/ReviewDetail';
import MusicalDetail from '../screens/MusicalDetail';
import ReviewEdit from '../screens/ReviewEdit';
import Home from '../screens/Home';
import Login from '../screens/Login';
import { useColorScheme } from 'react-native';
import {
  DARK_BACKGROUND,
  DARK_FONT,
  LIGHT_BACKGROUND,
  LIGHT_FONT,
} from '../colors';

const Stack = createNativeStackNavigator();

export default function Stacks({ navigation: { goBack } }) {
  const isDark = useColorScheme() === 'dark';
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity onPress={() => goBack()}>
            <Ionicons
              name="arrow-back"
              size={24}
              color={isDark ? DARK_FONT : LIGHT_FONT}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen
        name="MusicalDetail"
        component={MusicalDetail}
        options={{ title: '뮤지컬' }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="ReviewDetail"
        component={ReviewDetail}
        options={{ title: '리뷰 상세' }}
      />
      <Stack.Screen
        name="ReviewEdit"
        component={ReviewEdit}
        options={{ title: '리뷰 수정' }}
      />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
