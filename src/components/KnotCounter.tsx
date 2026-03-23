import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Text as SvgText } from 'react-native-svg';
import { KnotDot } from './KnotDot';
import { colors, fonts } from '../utils/theme';

interface Props {
  total: number;
  completed: number;
  size: number;
}

export const KnotCounter = React.memo(function KnotCounter({ total, completed, size }: Props) {
  const center = size / 2;
  const ringRadius = size / 2 - 20;
  const dotRadius = Math.max(3, Math.min(7, 200 / total));

  const dots = Array.from({ length: total }, (_, i) => {
    const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
    const cx = center + ringRadius * Math.cos(angle);
    const cy = center + ringRadius * Math.sin(angle);

    let state: 'default' | 'completed' | 'current' = 'default';
    if (i < completed) state = 'completed';
    else if (i === completed) state = 'current';

    return { cx, cy, state, key: i };
  });

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg width={size} height={size}>
        {dots.map((dot) => (
          <KnotDot
            key={dot.key}
            cx={dot.cx}
            cy={dot.cy}
            radius={dotRadius}
            state={dot.state}
          />
        ))}
        <SvgText
          x={center}
          y={center - 10}
          textAnchor="middle"
          fontSize={fonts.sizes.hero}
          fontWeight={fonts.weights.bold}
          fill={colors.textPrimary}
        >
          {completed}
        </SvgText>
        <SvgText
          x={center}
          y={center + 20}
          textAnchor="middle"
          fontSize={fonts.sizes.md}
          fill={colors.textMuted}
        >
          of {total}
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
