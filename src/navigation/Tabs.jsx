import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Home from '../screens/Home';
import Musicals from '../screens/Musicals';
import MyPage from '../screens/MyPage';
import Login from '../screens/Login';
import { useColorScheme } from 'react-native';
import {
  DARK_BACKGROUND,
  DARK_FONT,
  LIGHT_BACKGROUND,
  LIGHT_FONT,
} from '../colors';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const isDark = useColorScheme() === 'dark';
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarShowLabel: false }}
      sceneContainerStyle={{
        backgroundColor: isDark ? DARK_BACKGROUND : LIGHT_BACKGROUND,
      }}
    >
      <Tab.Screen
        name="Musicals"
        component={Musicals}
        options={{
          title: '모든 뮤지컬',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Mypage"
        component={MyPage}
        options={{
          title: '마이페이지',
          tabBarIcon: ({ color, _ }) => (
            <Ionicons name="person-circle-outline" size={28} color={color} />
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
    </Tab.Navigator>
  );
}
