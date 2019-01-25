import { useContext, useMemo, useEffect, useState } from 'react';
import { CssInJsContext } from '@andywer/style-api';
import { ThemeContext } from 'theming';

export function useStylesInternal(styles, inputs) {
  const cssInJs = useContext(CssInJsContext);
  const theme   = useContext(ThemeContext) || {};

  if (!cssInJs) {
    throw new Error("No CSS-in-JS implementation found in context.");
  }
  if (!theme._id) {
    theme._id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  }

  if (typeof styles === 'function') {
    styles = styles(theme);
  }

  const [sheet] = useState(() => cssInJs.createSheet(styles, theme._id, theme, inputs));

  useEffect(() => {
    sheet.attach();

    return () => sheet.detach();
  }, []);

  // Misusing useMemo here to synchronously sheet.update() only if styles or theme changed
  useMemo(() => {
    if (sheet.attached) {
      sheet.update(styles, theme);
    }
  }, inputs ? [theme, ...inputs] : [theme, Math.random()]);

  return sheet.getClassNames();
}

export function transformIntoGlobalStyles(styles) {
  const transformed = {};

  for (const key of Object.keys(styles)) {
    transformed[`@global ${key}`] = styles[key];
  }

  return transformed;
}
