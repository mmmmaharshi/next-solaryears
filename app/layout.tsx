import type { Metadata } from 'next';
import { Parkinsans } from 'next/font/google';
import './globals.css';

const sans = Parkinsans({
	variable: '--font-sans',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Solar Years | Planetary Calendars',
	description: 'Track New Year countdowns across our Solar System.',
	twitter: {
		title: 'Solar Years | Planetary Calendars',
		description: 'Track New Year countdowns across our Solar System.',
		card: 'summary_large_image',
		images: ['https://solaryears.vercel.app/og.png'],
		site: 'https://solaryears.vercel.app',
		creatorId: '@mmmmaharshi',
	},
	openGraph: {
		type: 'website',
		images: ['https://solaryears.vercel.app/og.png'],
		title: 'Solar Years | Planetary Calendars',
		description: 'Track New Year countdowns across our Solar System.',
		url: 'https://solaryears.vercel.app',
		countryName: 'India',
		siteName: 'Solaryears',
	},
	icons: {
		icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🪐</text></svg>',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning style={{ colorScheme: 'dark' }}>
			<body
				className={`${sans.variable} font-[family-name:var(--font-sans)] antialiased`}>
				{children}
			</body>
		</html>
	);
}
