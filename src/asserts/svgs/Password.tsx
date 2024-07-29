import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const Password = (props: SvgProps) => (
  <Svg width={15} height={18} viewBox="0 0 15 18" fill="none" {...props}>
    <Path
      d="M12.706 6.34066V5.28167C12.706 2.40662 10.3753 0.0759277 7.50024 0.0759277C4.6252 0.0759277 2.29451 2.40662 2.29451 5.28167L2.29451 6.34066C0.941054 6.93135 0.0654187 8.26699 0.0634766 9.74373V14.2058C0.0659359 16.2584 1.72927 17.9217 3.78186 17.9242H11.2186C13.2712 17.9217 14.9346 16.2584 14.937 14.2058L14.937 9.74373C14.9351 8.26699 14.0594 6.93135 12.706 6.34066ZM3.78186 5.28167C3.78186 3.22806 5.44664 1.56328 7.50024 1.56328C9.55385 1.56328 11.2186 3.22806 11.2186 5.28167V6.02534H3.78186V5.28167ZM13.4497 14.2058C13.4497 15.438 12.4508 16.4368 11.2186 16.4368H3.78186C2.5497 16.4368 1.55083 15.438 1.55083 14.2058L1.55083 9.74373C1.55083 8.51156 2.5497 7.5127 3.78186 7.5127H11.2186C12.4508 7.5127 13.4497 8.51156 13.4497 9.74373V14.2058Z"
      fill="white"
    />
  </Svg>
);
export default Password;