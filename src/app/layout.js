import './globals.css';

export const metadata = {
  title: 'Dua Page',
  description: 'A page for Islamic Duas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-100">
        {children}
      </body>
    </html>
  );
}