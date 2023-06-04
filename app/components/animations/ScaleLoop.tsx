import React, { useCallback, useEffect, useRef } from 'react';

import { Animated, ViewProps } from 'react-native';

export function ScaleLoop({
  children,
  animate,
  ...props
}: ViewProps & { animate: boolean }) {
  const scale = useRef(new Animated.Value(1)).current;
  const animation = useRef(
    Animated.loop(
      Animated.sequence([
        Animated.spring(scale, {
          toValue: 1.1,
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]),
    ),
  ).current;

  const stop = useCallback(() => {
    animation.stop();
    animation.reset();
  }, [animation]);

  const start = useCallback(() => {
    animation.start();
  }, [animation]);

  useEffect(() => {
    if (animate) {
      start();
    } else {
      stop();
    }
  }, [start, stop, animate]);
  return (
    <Animated.View {...props} style={{ transform: [{ scale }] }}>
      {children}
    </Animated.View>
  );
}
