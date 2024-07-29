import * as React from 'react';
import Svg, {
  G,
  Circle,
  Path,
  Rect,
  Defs,
  Pattern,
  Use,
  Image,
  SvgProps,
} from 'react-native-svg';

const HalfButton = (props: SvgProps) => (
  <Svg width={107} height={107} viewBox="0 0 108 108" fill="none" {...props}>
    <G>
      <Circle cx={54} cy={54} r={39} fill="#3191D7" />
    </G>
    <Path
      d="M49.6733 45.0192L58.6512 53.5665L49.6733 62.3113"
      stroke="white"
      strokeWidth={2.5}
      strokeLinecap="round"
    />
    <G opacity={0.1}>
      <Circle
        cx={54}
        cy={54}
        r={52}
        stroke="#3191D7"
        strokeWidth={2.5}
        shapeRendering="crispEdges"
      />
    </G>
    <Rect x={0} y={0} width={108} height={108} fill="url(#pattern0_25_9118)" />
    <Defs>
      <Pattern
        id="pattern0_25_9118"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use xlinkHref="#image0_25_9118" transform="scale(0.00990099)" />
      </Pattern>
      <Image
        id="image0_25_9118"
        width={101}
        height={101}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);

export default HalfButton;
