import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const CalendarCurrentIcon = (props: SvgProps) => (
  <Svg width={11} height={7} viewBox="0 0 11 7" fill="none" {...props}>
    <Path
      d="M10.279 1.21096C10.2129 1.14423 10.1341 1.09127 10.0473 1.05513C9.96059 1.01898 9.86753 1.00037 9.77354 1.00037C9.67955 1.00037 9.5865 1.01898 9.49974 1.05513C9.41298 1.09127 9.33423 1.14423 9.26804 1.21096L6.00604 4.47296C5.93985 4.53969 5.86111 4.59266 5.77435 4.6288C5.68759 4.66494 5.59453 4.68355 5.50054 4.68355C5.40655 4.68355 5.3135 4.66494 5.22674 4.6288C5.13998 4.59266 5.06123 4.53969 4.99504 4.47296L1.73204 1.21096C1.66845 1.13624 1.59011 1.07545 1.50194 1.03239C1.41377 0.989337 1.31766 0.964943 1.21963 0.960738C1.1216 0.956533 1.02375 0.972608 0.93222 1.00796C0.840686 1.0433 0.757433 1.09716 0.687672 1.16617C0.617911 1.23517 0.563143 1.31783 0.526796 1.40897C0.490449 1.50011 0.473305 1.59777 0.476438 1.69584C0.47957 1.79392 0.502911 1.89029 0.545 1.97892C0.587089 2.06756 0.64702 2.14655 0.721042 2.21096L3.99004 5.48596C4.39072 5.88606 4.93381 6.11079 5.50004 6.11079C6.06628 6.11079 6.60937 5.88606 7.01004 5.48596L10.279 2.21696C10.4123 2.08347 10.4871 1.90257 10.4871 1.71396C10.4871 1.52535 10.4123 1.34445 10.279 1.21096Z"
      fill="white"
    />
  </Svg>
);
export default CalendarCurrentIcon;