import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const MealIcon = (props: SvgProps) => (
  <Svg width={32} height={25} viewBox="0 0 32 25" fill="none" {...props}>
    <Path
      d="M0 18.1713C0.256637 17.6069 0.714132 17.4113 1.30454 17.4943C1.3868 16.9137 1.43853 16.3592 1.54653 15.8158C2.51846 10.9276 5.2741 7.40037 9.75065 5.22429C10.5242 4.84823 11.3718 4.62089 12.1927 4.34712C12.4009 4.27769 12.4953 4.20585 12.4807 3.97214C12.4245 3.06981 12.6124 2.23096 13.1715 1.49514C14.0391 0.353559 15.5399 -0.127274 16.9122 0.30291C18.292 0.735494 19.2589 2.0066 19.2995 3.44695C19.3071 3.71318 19.3006 3.97983 19.3006 4.19352C25.9243 6.2352 29.651 10.6301 30.5053 17.4903C31.0663 17.4104 31.5222 17.6087 31.7797 18.1713V19.0386C31.7611 19.0846 31.7324 19.1292 31.7254 19.1769C31.2963 22.0855 28.7971 24.2909 25.8494 24.298C19.1773 24.3139 12.5051 24.3113 5.83306 24.2992C3.23598 24.2945 0.958107 22.5469 0.238513 20.0548C0.142098 19.721 0.0787043 19.3776 0 19.0386V18.1713ZM28.5504 17.4748C28.2357 11.4196 22.8831 5.41919 15.3392 5.73939C8.06566 6.04808 3.44015 12.0875 3.24252 17.4748H28.5504ZM29.7752 19.3664H1.98921C2.00022 19.4259 2.00485 19.4661 2.01536 19.5048C2.49313 21.2585 4.09221 22.4442 5.99742 22.4448C12.5448 22.4472 19.0921 22.4465 25.6395 22.4432C25.9071 22.4431 26.1769 22.4207 26.4419 22.3827C28.0017 22.1594 29.4396 20.8619 29.7752 19.3664ZM17.4103 3.89385C17.5267 3.19246 17.2697 2.57201 16.6909 2.23137C16.1196 1.89504 15.545 1.91995 14.9975 2.29046C14.4718 2.64625 14.2351 3.29219 14.3761 3.89385H17.4103Z"
      fill="white"
    />
  </Svg>
);
export default MealIcon;
