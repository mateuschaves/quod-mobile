import React from 'react';

import { Provider as PaperProvider } from 'react-native-paper';
import theme from '~/theme';

import AppNavigator from '~/navigation/AppNavigator';

export default function App() {
  return (
    <PaperProvider theme={theme}>
       <AppNavigator />
    </PaperProvider>
  );
}

