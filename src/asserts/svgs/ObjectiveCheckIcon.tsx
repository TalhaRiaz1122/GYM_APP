import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const ObjectiveCheckIcon = (props: SvgProps) => (
  <Svg width={47} height={47} viewBox="0 0 47 47" fill="none" {...props}>
    <Path
      d="M23.5 47C36.4787 47 47 36.4787 47 23.5C47 10.5213 36.4787 0 23.5 0C10.5213 0 0 10.5213 0 23.5C0 36.4787 10.5213 47 23.5 47Z"
      fill="#00C42B"
    />
    <Path
      d="M22.1176 29C21.7587 29 21.4285 28.8782 21.1762 28.6242L17.3863 24.9117C16.8712 24.4036 16.8712 23.5859 17.3863 23.0745C17.9085 22.563 18.7502 22.563 19.2689 23.0745L22.1176 25.8546L28.7276 19.3863C29.2497 18.8712 30.0951 18.8712 30.6137 19.3863C31.1288 19.8908 31.1288 20.712 30.6137 21.2269L23.0623 28.6242C22.81 28.8782 22.4728 29 22.1176 29Z"
      fill="white"
    />
  </Svg>
);
export default ObjectiveCheckIcon;
