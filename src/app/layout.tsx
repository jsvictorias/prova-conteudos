'use client';

import { type ReactNode, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { fontNames } from '@/styles/fonts';
import { StyledComponentsRegistry } from '@/lib/registry';
import { theme } from '@/styles/theme';
import { GlobalStyles } from '@/styles/global';
import { GSAPInitializer } from '@/components/atoms/gsap-initializer';
import { Loader } from '@/components/molecules/loader';

const RootLayout = ({
  children
}: Readonly<{
  children: ReactNode;
}>): ReactNode => {
  return (
    <html lang="en">
      <body className={fontNames}>
        <base href={process.env.NEXT_PUBLIC_BASE_PATH} />
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <GSAPInitializer />
            <Suspense>
              <Loader />
            </Suspense>
            <main>{children}</main>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
