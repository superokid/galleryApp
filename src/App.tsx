/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import RouterWrapper from './routes/RouterWrapper';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      staleTime: Infinity,
    },
  },
});

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={styles.bg}>
        <RouterWrapper />
      </SafeAreaView>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default App;
