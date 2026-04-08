import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { SchemaOrg } from "@/components/SchemaOrg";

const sora = Sora({
    variable: "--font-sora",
    subsets: ["latin"],
});
const isGithubPages = process.env.IS_GITHUB_PAGES === 'true';

export const metadata: Metadata = {
    title: {
        default: '17movement - Premium FiveM Scripts & Resources',
        template: '%s - 17movement.net',
    },
    description: "The best online store with FiveM Scripts! Our modern UI and extensive selection of GTA 5 roleplay scripts are designed to keep your players engaged and entertained. Premium resources to make your server stand out from the rest.",
    keywords: [
        'FiveM', 'FiveM scripts', 'GTA 5', 'GTA V', 'roleplay scripts',
        'FiveM resources', 'FiveM store', 'RP scripts', 'FiveM mods',
        'QBCore', 'ESX', 'FiveM server', 'GTA roleplay',
    ],
    authors: [{ name: '17movement.net' }],
    creator: '17movement.net',
    metadataBase: new URL('https://17movement.net'),
    openGraph: {
        type: 'website',
        locale: 'en_US',
        siteName: '17movement',
        title: '17movement - Premium FiveM Scripts & Resources',
        description: 'The best online store with FiveM Scripts! Premium GTA 5 roleplay scripts to keep your players engaged and make your server stand out.',
        images: [{ url: '/assets/images/mov_opengraph.webp', width: 1200, height: 630, alt: '17movement' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: '17movement - Premium FiveM Scripts & Resources',
        description: 'The best online store with FiveM Scripts! Premium GTA 5 roleplay scripts to keep your players engaged and make your server stand out.',
        images: ['/assets/images/mov_opengraph.webp'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: isGithubPages ? 'fEMTKztj4EjfpDv8krSPuJk6qTc5MOuvisnu4J98SVU' : "Pm6XG5CB2ihhkyxPqPydfLLfXtckFPSTb2j7ZoQlVCA",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${sora.variable} h-full antialiased`}
        >
            <head>
                <SchemaOrg />
            </head>
            <body>{children}</body>
        </html>
    );
}
