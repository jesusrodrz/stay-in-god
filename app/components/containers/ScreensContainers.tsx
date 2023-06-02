import { VStack, IStackProps } from 'native-base';
import React from 'react';

export function ScreenContainer(props: IStackProps) {
  return <VStack {...props} safeArea width="100%" height="100%" />;
}
