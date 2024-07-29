import * as React from 'react';
import Svg, {
  Path,
  Defs,
  Pattern,
  Use,
  Image,
  SvgProps,
} from 'react-native-svg';
const Stripe = (props: SvgProps) => (
  <Svg width={68} height={32} viewBox="0 0 68 32" fill="none" {...props}>
    <Path d="M67.5 0H0.5V32H67.5V0Z" fill="url(#pattern0_8_2116)" />
    <Defs>
      <Pattern
        id="pattern0_8_2116"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#image0_8_2116"
          transform="matrix(0.00185121 0 0 0.00387597 -0.00167766 0)"
        />
      </Pattern>
      <Image
        id="image0_8_2116"
        width={542}
        height={258}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAh4AAAECCAYAAACxP943AAAgAElEQVR4Ae2dCbgkVXXH3xtCBFmMK4JGNBoxhEUYRRDFURQdgZEZrOmuc99Sde5zwAV3EzVKxrhGibigURYTjQhGoxgVNWpAJWCQgLIJsjiKILLvIMzwz3fq1WP69et+r5fauvs/3zff667urrr3d8+99a9zzz13bIz/SIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAEFicQBNhiKsAT1gV4xOLf5KckQAIkQAIkQAIk0CWBRGjU8PQZwZpY8C7vcLIKzpyZxIu6PBW/TgIkQAIkQAIkQALzCRy1Eg+bqmMvreNIFXxeBZd4h+u84BbvcLd32KiCBzXE4fN/yXckQAIkQAIkQAIk0IKAeTFWrsTDJiexTRTg8epwkNaxXgXfTwUGvMOi/yk8WoDlIRIgARIgARIgAYy7ldh+MsCTpkLsEdWxQut4rQ9xgjqc6wV3mgdjKaHR/DmFBy2LBEiABEiABEhgbMUK/Mm6CezoBfto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z5kK8ASbMpk8CNsEAbYgPhIgARIgARIgARLomoAKNqjDTepwroY4djrE4SYyuj4Rf0ACJEACJEACJEACSxGYdth/cjUet9T3+DkJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJDCaB/wc3qN7f6ZSH3wAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
export default Stripe;