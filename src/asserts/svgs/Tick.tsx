import * as React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Svg, { Path, SvgProps } from "react-native-svg";
const Tick = (props: SvgProps) => (
  <Svg width={wp(5)} height={wp(3)} viewBox="0 0 12 8" fill="none" {...props}>
    <Path
      d="M3.574 7.99526C3.2598 7.9954 2.95846 7.87051 2.73647 7.64816L0.204344 5.11696C-0.0681146 4.84441 -0.0681146 4.40262 0.204344 4.13007C0.47689 3.85761 0.918686 3.85761 1.19123 4.13007L3.574 6.51284L9.8778 0.209045C10.1503 -0.0634155 10.5921 -0.0634155 10.8647 0.209045C11.1371 0.48159 11.1371 0.923386 10.8647 1.19593L4.41153 7.64816C4.18954 7.87051 3.8882 7.9954 3.574 7.99526Z"
      fill="#3191D7"
    />
  </Svg>
);
export default Tick;
