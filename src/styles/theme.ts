import 'styled-components';

export const theme = {
  magenta: '#ed145b',
  magentaHalf: 'rgba(237, 20, 91, 0.4)',
  black: '#000'
};

// get the color name in https://www.color-name.com

export type ColorFamily = keyof typeof theme;
type Theme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Styled component use extends, so is okay to be empty
  export interface DefaultTheme extends Theme {}
}
