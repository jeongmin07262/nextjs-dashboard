// global.css 적용하기
import '@/app/ui/global.css';
// 글꼴 적용하기
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* body에 글꼴 적용 */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
