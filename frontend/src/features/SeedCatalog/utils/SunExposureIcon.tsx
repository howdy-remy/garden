import sunFull from '../assets/sun_full.png';
import sunPartial from '../assets/sun_partial.png';
import sunShade from '../assets/sun_shade.png';
import sunFullPartial from '../assets/sun_full-partial.png';
import sunPartialShade from '../assets/sun_partial-shade.png';

const exposureToIcon: { [key: string]: string } = {
  FULL: sunFull,
  PARTIAL: sunPartial,
  SHADE: sunShade,
  FULL_PARTIAL: sunFullPartial,
  PARTIAL_SHADE: sunPartialShade,
};

export default (exp: string) => exposureToIcon[exp];
