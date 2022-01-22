// colors ----------------------------------------------------------------------
const colors = {
  white: '#fff',
  black: '#000',
  primary100: '#F1F3F2',
  primary300: '#E2E4E2',
  primary900: '#124135',
  accent100: '#F4F6F1',
  accent400: '#BCCDB4',
  accent700: '#4E6B46',
  accent800: '#425B39',
  contrastTan: '#E9D7AF',
  contrastYellow: '#F9A424',
  contrastOrange: '#FD6A3B',
};

const phColors = {
  slightlyAcidic: '#FBB34F',
  neutral: '#82844F',
  slightlyAlkaline: '#214166',
};

// typography ------------------------------------------------------------------
const fontSizes = {
  extraLarge: '32px',
  large: '24px',
  normal: '14px',
  small: '10px',
};

const fontFaces = {
  recoletaBold: 'Recoleta-Bold',
  gilroyExtraBold: 'Gilroy-ExtraBold',
};

// exports ---------------------------------------------------------------------
export default {
  ...colors,
  ...phColors,
  ...fontSizes,
  ...fontFaces,
};
