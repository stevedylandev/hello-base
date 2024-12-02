import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const cbSans = localFont({
	src: "./fonts/Coinbase_Mono-Regular-web.woff2",
	variable: "--font-cbMono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${cbSans.variable} hantialiased`}>{children}</body>
		</html>
	);
}
