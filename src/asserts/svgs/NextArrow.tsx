import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const NextArrow = (props: SvgProps) => (
  <Svg width={wp(3)} height={hp(1.5)} viewBox="0 0 7 13" fill="none" {...props}>
    <Path
      d="M0.653555 12.7133C0.462277 12.522 0.3573 12.2681 0.3573 11.9978C0.3573 11.7276 0.462277 11.4744 0.653555 11.2831L4.66319 7.27244C4.86839 7.06812 4.98081 6.79624 4.98081 6.50726C4.98081 6.21829 4.86839 5.94641 4.66319 5.74209L0.647818 1.72653C0.457394 1.53523 0.351562 1.28207 0.351562 1.01183C0.351562 0.600746 0.59655 0.234436 0.975932 0.0773315C1.09885 0.0260544 1.22898 0 1.36264 0C1.63277 0 1.88679 0.105003 2.07807 0.296303L6.09344 4.3143C7.30153 5.52556 7.30153 7.49467 6.09344 8.70593L2.08295 12.7133C1.89241 12.9038 1.63851 13.0096 1.36825 13.0096C1.098 13.0096 0.843978 12.9038 0.653555 12.7133Z"
      fill="white"
    />
  </Svg>
);
export default NextArrow;