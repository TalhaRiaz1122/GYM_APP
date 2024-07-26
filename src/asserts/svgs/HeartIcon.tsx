import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const HeartIcon = (props: SvgProps) => (
  <Svg width={19} height={16} viewBox="0 0 19 16" fill="none" {...props}>
    <Path
      d="M13.3899 0.0996712C11.6919 0.126082 10.1377 1.05859 9.31539 2.54438C8.49304 1.05859 6.93885 0.126082 5.24087 0.0996711C2.47251 0.219949 0.321039 2.55347 0.425525 5.32247C0.425525 8.69098 3.9711 12.3699 6.94476 14.8642C8.31534 16.016 10.3154 16.016 11.686 14.8642C14.6597 12.3699 18.2052 8.69098 18.2052 5.32247C18.3097 2.55347 16.1583 0.21995 13.3899 0.0996712Z"
      fill="#3191D7"
    />
  </Svg>
);
export default HeartIcon;
