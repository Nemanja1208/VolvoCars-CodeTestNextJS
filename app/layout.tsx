
import "../public/css/styles.css";
export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>
        {children}
        </body>
      </html>
    );
  }

  export const metadata = {
    title: 'Home',
    description: 'Welcome to Next.js',
  };