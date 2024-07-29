import * as React from 'react';
import Svg, { Line, Rect, Path, SvgProps } from 'react-native-svg';

interface Props extends SvgProps {
  fill: string;
}

const Or = ({ fill, ...props }: Props) => (
  <Svg width={283} height={26} viewBox="0 0 283 26" fill="none" {...props}>
    <Line
      opacity={0.1}
      x1={1}
      y1={12}
      x2={282}
      y2={12}
      stroke="white"
      strokeLinecap="round"
    />
    <Rect x={128} width={26} height={26} fill={fill} />
    <Path
      d="M139.041 19.091C138.2 19.091 137.433 18.896 136.74 18.506C136.046 18.1073 135.496 17.557 135.089 16.855C134.69 16.1443 134.491 15.347 134.491 14.463C134.491 13.579 134.69 12.786 135.089 12.084C135.496 11.3733 136.046 10.823 136.74 10.433C137.433 10.0343 138.2 9.835 139.041 9.835C139.89 9.835 140.661 10.0343 141.355 10.433C142.048 10.823 142.594 11.369 142.993 12.071C143.391 12.773 143.591 13.5703 143.591 14.463C143.591 15.3557 143.391 16.153 142.993 16.855C142.594 17.557 142.048 18.1073 141.355 18.506C140.661 18.896 139.89 19.091 139.041 19.091ZM139.041 18.064C139.673 18.064 140.241 17.9167 140.744 17.622C141.255 17.3273 141.654 16.907 141.94 16.361C142.234 15.815 142.382 15.1823 142.382 14.463C142.382 13.735 142.234 13.1023 141.94 12.565C141.654 12.019 141.259 11.5987 140.757 11.304C140.254 11.0093 139.682 10.862 139.041 10.862C138.399 10.862 137.827 11.0093 137.325 11.304C136.822 11.5987 136.423 12.019 136.129 12.565C135.843 13.1023 135.7 13.735 135.7 14.463C135.7 15.1823 135.843 15.815 136.129 16.361C136.423 16.907 136.822 17.3273 137.325 17.622C137.836 17.9167 138.408 18.064 139.041 18.064ZM146.335 13.033C146.543 12.6257 146.838 12.3093 147.219 12.084C147.609 11.8587 148.082 11.746 148.636 11.746V12.968H148.324C146.998 12.968 146.335 13.6873 146.335 15.126V19H145.152V11.876H146.335V13.033Z"
      fill="white"
    />
  </Svg>
);
export default Or;