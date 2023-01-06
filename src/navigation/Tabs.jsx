import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Home from '../screens/Home';
import Reviews from '../screens/Reviews';
import MyPage from '../screens/MyPage';
import Login from '../screens/Login';
import MusicalDetail from '../screens/MusicalDetail';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Reviews"
        component={Reviews}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Mypage"
        component={MyPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="login" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MusicalDetail"
        component={MusicalDetail}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="picture" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
