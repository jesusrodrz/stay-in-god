import { Platform } from 'react-native';

export function getOSProperty<T>(OS: typeof Platform.OS, value: T) {
  return Platform.OS === OS ? value : undefined;
}
