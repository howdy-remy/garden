import { Magic } from 'magic-sdk';

export default new Magic(process.env.REACT_APP_MAGIC_PUBLISHABLE_KEY as string);
