'use client';

import { StyleProvider, ThemePicker } from 'vcc-ui';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <StyleProvider>
          <ThemePicker variant="light">
              <body>
                {children}
              </body>
          </ThemePicker>
        </StyleProvider>
      </html>
    );
  }