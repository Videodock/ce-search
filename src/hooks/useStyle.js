import { useStylesInternal } from './utils';

export default function useStyle (style, inputs = undefined) {
  return useStylesInternal({ style }, inputs).style;
}
