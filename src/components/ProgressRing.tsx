import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';
import { colors, fonts } from '../utils/theme';

interface Props {
  progress: number; // 0-1
  size: number;
  label: string;
}

export const ProgressRing = React.memo(function ProgressRing({ progress, size, label }: Props) {
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - Math.min(progress, 1));
  const center = size / 2;

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg width={size} height={size}>
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke={colors.bgCard}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke={colors.gold}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={`${circumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${center}, ${center}`}
        />
        <SvgText
          x={center}
          y={center - 6}
          textAnchor="middle"
          fontSize={fonts.sizes.lg}
          fontWeight={fonts.weights.bold}
          fill={colors.textPrimary}
        >
          {Math.round(progress * 100)}%
        </SvgText>
        <SvgText
          x={center}
          y={center + 14}
          textAnchor="middle"
          fontSize={fonts.sizes.xs}
          fill={colors.textSecondary}
        >
          {label}
        </SvgText>
      </Svg>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
