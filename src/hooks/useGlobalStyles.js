import { useStylesInternal, transformIntoGlobalStyles } from './utils';

export default function useGlobalStyles (styles, inputs = undefined) {
  const transformedStyles = transformIntoGlobalStyles(styles);

  useStylesInternal(transformedStyles, inputs);
}
