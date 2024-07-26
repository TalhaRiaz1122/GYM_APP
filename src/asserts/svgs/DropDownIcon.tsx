import * as React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Svg, { Path, SvgProps } from "react-native-svg";
const DropDownIcon = (props: SvgProps) => (
  <Svg width={wp(5)} height={wp(4)} viewBox="0 0 10 5" fill="none" {...props}>
    <Path
      d="M8.66956 -2.00272e-05H1.53915C1.2812 0.00106144 1.0493 0.157414 0.951579 0.396136C0.853855 0.63486 0.909553 0.908942 1.0927 1.09059L4.65153 4.64942C4.77128 4.77016 4.9343 4.83807 5.10435 4.83807C5.27441 4.83807 5.43742 4.77016 5.55718 4.64942L9.11601 1.09059C9.29915 0.908942 9.35485 0.63486 9.25713 0.396136C9.15941 0.157414 8.92751 0.00106144 8.66956 -2.00272e-05Z"
      fill="#3191D7"
    />
  </Svg>
);
export default DropDownIcon;
