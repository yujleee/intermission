import { ThemeProvider } from '@emotion/react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import Root from './src/navigation/Root';
import { darkTheme, lightTheme } from './src/theme';
import 'react-native-get-random-values';
import { StatusBar } from 'expo-status-bar';

// react-query 이용을 위한 클라이언트
const queryClient = new QueryClient();

export default function App() {
  const isDark = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
          <StatusBar style="auto" />
          <Root />
        </NavigationContainer>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
