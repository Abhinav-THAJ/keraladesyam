import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FontProvider } from '@/components/FontContext';

export const metadata: Metadata = {
  title: "കേരളദേശം - Kerala Desam | Kerala's Voice",
  description:
    'കേരളത്തിലെയും പ്രവാസലോകത്തെയും സമഗ്രവും തത്സമയവുമായ വാർത്തകൾ, രാഷ്ട്രീയ വിശകലനങ്ങൾ, സ്പോർട്സ്, ബിസിനസ്, കാലാവസ്ഥ, ഡാം ജലനിരപ്പ് വിവരങ്ങൾ.',
  keywords: [
    'Kerala News',
    'Malayalam News Portal',
    'Kerala Desam',
    'കേരളദേശം',
    'Pravasi News',
    'Gulf Malayalam News',
    'Wayanad Tunnel',
  ],
  authors: [{ name: 'കേരളദേശം എഡിറ്റോറിയൽ ഡെസ്ക്' }],
  openGraph: {
    title: "കേരളദേശം - Kerala Desam | Kerala's Voice",
    description: 'കേരളത്തിലെയും പ്രവാസലോകത്തെയും സമഗ്ര വാർത്താ പോർട്ടൽ',
    url: 'https://keraladesam.in',
    siteName: 'കേരളദേശം (Kerala Desam)',
    locale: 'ml_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ml">
      <body className="bg-parchment-base font-body-md text-on-surface antialiased min-h-screen flex flex-col">
        <FontProvider>
          <Header />
          <div className="flex-1 w-full">
            {children}
          </div>
          <Footer />
        </FontProvider>
      </body>
    </html>
  );
}
