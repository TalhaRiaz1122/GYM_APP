import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const FirstStepSlider = (props: SvgProps) => (
  <Svg width={58} height={3} viewBox="0 0 58 3" fill="none" {...props}>
    <Path
      d="M25.5 3H1.5C0.67157 3 0 2.32843 0 1.5C0 0.67157 0.67157 0 1.5 0H25.5C26.3284 0 27 0.67157 27 1.5C27 2.32843 26.3284 3 25.5 3Z"
      fill="#3191D7"
    />
    <Path
      opacity={0.1}
      d="M56.5 3H32.5C31.6716 3 31 2.32843 31 1.5C31 0.67157 31.6716 0 32.5 0H56.5C57.3284 0 58 0.67157 58 1.5C58 2.32843 57.3284 3 56.5 3Z"
      fill="#3191D7"
    />
  </Svg>
);
export default FirstStepSlider;
