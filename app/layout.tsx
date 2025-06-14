import './global.css';
import {RootProvider} from 'fumadocs-ui/provider';
import {Inter} from 'next/font/google';
import type {ReactNode} from 'react';
import {Banner} from "fumadocs-ui/components/banner";
import Link from "next/link";

const inter = Inter({
    subsets: ['latin'],
});

export default function Layout({children}: { children: ReactNode }) {
    return (
        <html lang="en" className={inter.className} suppressHydrationWarning>
        <body className="flex flex-col min-h-screen">
        <Banner variant="rainbow" id="migrate-to-pedro-1.1.0">Pedro Pathing 1.1.0 has released! If you haven't already,&nbsp;<span className="prose"><Link
            className="link prose" href="/docs/migrating">migrate
            now</Link></span>.</Banner>
        <RootProvider>{children}</RootProvider>
        </body>
        </html>
    );
}
