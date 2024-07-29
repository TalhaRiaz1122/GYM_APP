import * as React from 'react';
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  ClipPath,
  Rect,
  SvgProps,
} from 'react-native-svg';

const FullButton = (props: SvgProps) => (
  <Svg width={108} height={108} viewBox="0 0 108 108" fill="none" {...props}>
    <G>
      <Circle cx={54} cy={54} r={39} fill="#3191D7" />
    </G>
    <G>
      <Circle
        cx={54}
        cy={54}
        r={49}
        stroke="#3191D7"
        strokeWidth={2.5}
        shapeRendering="crispEdges"
      />
    </G>
    <G clipPath="url(#clip0_0_1)">
      <Path
        d="M64.751 47.7671L50.207 61.229L43.768 54.7719"
        stroke="white"
        strokeWidth={2.5}
        strokeLinecap="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_0_1">
        <Rect
          width={24.518}
          height={16.964}
          fill="white"
          transform="translate(42 46)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default FullButton;
