// colors ----------------------------------------------------------------------
const colors = {
  white: '#fff',
  black: '#000',
  primary100: '#EDF8EF',
  primary300: '#DBF1DE',
  primary700: '#48654B',
  accentBlue: '#2F4348',
  accentYellow: '#FBB34F',
  accentPurple: '#571B43',
  background: '#f1f4f1',

  springFg: '#757742',
  springBg: '#F5F5F1',
  summerFg: '#48654B',
  summerBg: '#EFF9F0',
  fallFg: '#A3251B',
  fallBg: '#FEF4E5',
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
