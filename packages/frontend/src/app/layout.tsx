import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import StoreProvider from '@app/StoreProvider';
import Header from '@components/sections/Header';
import Footer from '@components/sections/Footer';
import ClientHosting from '@components/widgets/ClientHosting';
import '@src/globalStyles.scss';

const dm_sans = DM_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-dm-sans',
});
// const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
    title: 'KL Design',
    description: "KephaL's Design Portfolio",
    generator: 'Next.js',
    applicationName: 'KL DESIGN',
    referrer: 'origin-when-cross-origin',
    keywords: [],
    icons: {
        icon: '/favicon.ico',
    },
    authors: [
        {
            name: 'Zuguang Tong',
            url: 'https://www.linkedin.com/in/zuguang-tong-aa7041229/',
        },
    ],
    creator: 'Zuguang Tong',
    publisher: 'Zuguang Tong',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <StoreProvider>
            <html lang='en-US' className={dm_sans.className} id='home'>
                <body id='app'>
                    <ClientHosting>
                        <Header />
                        <main>{children}</main>
                        <Footer />
                    </ClientHosting>
                </body>
            </html>
        </StoreProvider>
    );
}
