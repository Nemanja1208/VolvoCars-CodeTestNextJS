'use client';
// import "../public/css/styles.css";
import { StyleProvider, ThemePicker } from 'vcc-ui';

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
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