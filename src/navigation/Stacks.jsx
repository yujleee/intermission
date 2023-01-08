import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import MusicalDetail from '../screens/MusicalDetail';
import Musicals from '../screens/Musicals';
import MyPage from '../screens/MyPage';
import ReviewDetail from '../screens/ReviewDetail';
import Reviews from '../screens/Reviews';
import SignUp from '../screens/SignUp';

const Stack = createNativeStackNavigator();

export default function Stacks() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Musicals" component={Musicals} />
      <Stack.Screen name="MusicalDetail" component={MusicalDetail} />
      <Stack.Screen name="Reviews" component={Reviews} />
      <Stack.Screen name="ReviewDetail" component={ReviewDetail} />
      <Stack.Screen name="Mypage" component={MyPage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
