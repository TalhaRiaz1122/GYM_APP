import * as React from 'react';
import Svg, { Circle, SvgProps } from 'react-native-svg';
const MasterCard = (props: SvgProps) => (
  <Svg width={35} height={24} viewBox="0 0 35 24" fill="none" {...props}>
    <Circle opacity={0.5} cx={11.6855} cy={12.1406} r={11.1855} fill="white" />
    <Circle opacity={0.5} cx={23.3262} cy={12.1406} r={11.1855} fill="white" />
  </Svg>
);
export default MasterCard;
