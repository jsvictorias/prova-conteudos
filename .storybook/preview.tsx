import type { Preview } from '@storybook/react';

import { ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { GlobalStyles } from '../src/styles/global';
import { theme } from '../src/styles/theme';
import { fontNames } from '../src/styles/fonts';
import viewports from './viewports';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports,
      defaultViewport: 'fullHD',
    },
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className={fontNames}>
        <Story />
      </div>
    ),
    withThemeFromJSXProvider({
      themes: {
        default: theme,
      },
      defaultTheme: 'default',
      Provider: ThemeProvider,
      GlobalStyles,
    }
  )]
};

export default preview;
