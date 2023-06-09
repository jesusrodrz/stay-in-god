/**
 * @format
 */

import { AppRegistry } from 'react-native';
import AppWithProviders from './app/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppWithProviders);
