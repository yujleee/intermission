import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Stacks from './Stacks';
import Tabs from './Tabs';

const Stack = createNativeStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Stacks" component={Stacks} />
    </Stack.Navigator>
  );
}
