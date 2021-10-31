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
import { StatusBar, useColorScheme } from 'react-native';
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
      <RouterWrapper />
    </QueryClientProvider>
  );
};

export default App;
