import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Facebook = (props: SvgProps) => (
  <Svg width={wp(8)} height={hp(5)} viewBox="0 0 26 25" fill="none" {...props}>
    <Path
      d="M25.1384 13.0008C25.1384 19.059 20.6937 24.0813 14.8915 24.9927V16.5332H17.7127L18.2498 13.0332H14.8915V10.7623C14.8915 9.80436 15.3608 8.87172 16.864 8.87172H18.3904V5.8917C18.3904 5.8917 17.0046 5.655 15.6805 5.655C12.9149 5.655 11.1083 7.33113 11.1083 10.3648V13.0322H8.03419V16.5321H11.1083V24.9917C5.30707 24.0793 0.861328 19.058 0.861328 13.0008C0.861328 6.29733 6.29636 0.862305 12.9999 0.862305C19.7034 0.862305 25.1384 6.29632 25.1384 13.0008Z"
      fill="white"
    />
  </Svg>
);
export default Facebook;
