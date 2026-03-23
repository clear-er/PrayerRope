import React from 'react';
import { Circle } from 'react-native-svg';
import { colors } from '../utils/theme';

interface Props {
  cx: number;
  cy: number;
  radius: number;
  state: 'default' | 'completed' | 'current';
}

export const KnotDot = React.memo(function KnotDot({ cx, cy, radius, state }: Props) {
  const fill =
    state === 'completed'
      ? colors.knotCompleted
      : state === 'current'
        ? colors.knotCurrent
        : colors.knotDefault;

  return (
    <Circle
      cx={cx}
      cy={cy}
      r={radius}
      fill={fill}
      opacity={state === 'default' ? 0.5 : 1}
    />
  );
});
