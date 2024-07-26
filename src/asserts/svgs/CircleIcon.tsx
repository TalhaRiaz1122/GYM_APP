import * as React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Svg, { Circle, SvgProps } from 'react-native-svg';

interface CircleIconProps extends SvgProps {
  innerColor?: string; // Color for the inner circle
  outerColor?: string; // Color for the outer stroke
  circleSize?: number; // Size of the circle
  strokeWidth?: number; // Width of the stroke
}

const CircleIcon = ({
  innerColor = '#002D4E',
  outerColor = '#3191D7',
  circleSize = wp(5), // Default size of the circle
  strokeWidth = 3, // Default width of the stroke
  ...props
}: CircleIconProps) => {
  const radius = (circleSize - strokeWidth) / 2; // Calculate radius based on size and stroke width

  return (
    <Svg
      width={circleSize}
      height={circleSize}
      viewBox={`0 0 ${circleSize} ${circleSize}`}
      fill="none"
      {...props}
    >
      <Circle
        cx={circleSize / 2}
        cy={circleSize / 2}
        r={radius}
        fill={innerColor}
        stroke={outerColor}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

export default CircleIcon;
