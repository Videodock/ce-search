import { useStylesInternal } from './utils';

type ColorDef = {
  main: string,
};

type Theme = {
  palette: {
    primary: ColorDef,
    secondary: ColorDef,
  },
  typography: {
    fontFamily: string,
  },
  spacing: {
    unit: number,
  }
};

type stylesDef = {
  [string]: any,
};

type withThemeFunc = <T: string>(theme: Theme) => { [T]: string };

/**
 * Generates stylesheet based on styles and theme
 *
 * @param {stylesDef|withThemeFunc} styles
 * @param {Array<any>} [inputs]
 * @returns {styles}
 */
const useStyles = function (styles: stylesDef | withThemeFunc, inputs: Array<any>): Object {
  return useStylesInternal(styles, inputs);
};

export default useStyles;
