import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RippleBackground from '@/components/RippleBackground';
import '@/styles/globals.css';
import '@/styles/layout.css';
import '@/styles/header.css';
import '@/styles/footer.css';
import '@/styles/components.css';

export const metadata = {
  title: 'Portfolio - College Student',
  description: 'A minimalist portfolio showcasing projects and skills.',
  viewport: 'width=device-width, initial-scale=1.0',
  charset: 'utf-8',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RippleBackground />
        <div className="layout">
          <Header />
          <main className="layout-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
