// import { MD3Theme, DefaultTheme } from 'react-native-paper';

import { extendTheme, Theme } from 'native-base';
import { DeepPartial } from '../../types/helpers-types';
import {
  DefaultTheme,
  Theme as NavigationTheme,
} from '@react-navigation/native';

const themeObject: DeepPartial<Theme> = {
  colors: {
    primary: {
      '50': '#b3ddff',
      '100': '#91ceff',
      '200': '#70bfff',
      '300': '#4fb0ff',
      '400': '#30a2ff',
      '500': '#2098f9',
      '600': '#138ef3',
      '700': '#1283e0',
      '800': '#1678c8',
      '900': '#196db1',
    },
    secondary: {
      '50': '#85e2ff',
      '100': '#63dbff',
      '200': '#42d3ff',
      '300': '#21cbff',
      '400': '#00c4ff',
      '500': '#06b1e5',
      '600': '#0ba0cd',
      '700': '#0f8fb5',
      '800': '#127e9f',
      '900': '#146e89',
    },
    tertiary: {
      '50': '#ff108123',
      '100': '#ff100102',
      '200': '#fff7e0',
      '300': '#ffefbf',
      '400': '#ffe7a0',
      '500': '#fce08d',
      '600': '#f8da7e',
      '700': '#f3d26f',
      '800': '#edca61',
      '900': '#e7c254',
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 10,
      },
    },
  },
  fontSizes: {
    // xs: 16,
    sm: 18,
    md: 20,
    // lg: 30,
    // xl: 30,
  },
  sizes: {},
};
export const theme = extendTheme(themeObject);

export const navigationTheme: NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: themeObject.colors?.primary?.[400] as string,
  },
};
