import { DefaultTheme } from 'react-native-paper';

const theme: typeof DefaultTheme = {
    ...DefaultTheme,
    roundness: 8,
    colors: {
      ...DefaultTheme.colors,
      primary: '#575FF2',
      accent: '#403E29',
      background: '#F2F2F2',
      text: '#403E29',
      placeholder: '#403E29',
    },
};

export default theme;