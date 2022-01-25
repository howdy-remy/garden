import sunFull from './sun_full.png';
import sunPartial from './sun_partial.png';
import sunShade from './sun_shade.png';
import sunFullPartial from './sun_full-partial.png';
import sunPartialShade from './sun_partial-shade.png';

const exposureToIcon: { [key: string]: string } = {
  FULL: sunFull,
  PARTIAL: sunPartial,
  SHADE: sunShade,
  FULL_PARTIAL: sunFullPartial,
  PARTIAL_SHADE: sunPartialShade,
};

export default (exp: string) => exposureToIcon[exp];
