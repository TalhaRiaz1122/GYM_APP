import * as React from 'react';
import Svg, { Line, SvgProps } from 'react-native-svg';
const RestLineIcon = (props: SvgProps) => (
  <Svg width={258} height={2} viewBox="0 0 258 2" fill="none" {...props}>
    <Line
      x1={0.75}
      y1={1.25}
      x2={257.25}
      y2={1.25}
      stroke="#3191D7"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeDasharray={4}
    />
  </Svg>
);
export default RestLineIcon;
