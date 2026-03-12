import './globals.css';

export const metadata = {
  title: 'Novera Migration | Build Your New Chapter Abroad',
  description:
    'Novera Migration helps skilled migrants, students, and families move abroad with clarity and confidence.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
