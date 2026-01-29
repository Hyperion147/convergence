import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Convergence } from "convergence-ui";
import ClickSpark from "@/components/ClickSpark";
import ClickSound from "@/components/ClickSound";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const playfairSerif = Playfair_Display({
    variable: "--font-playfair-serif",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Convergence | suryansu.pro",
        template: "%s | Convergence UI",
    },
    description: "A comprehensive UI kit for modern web applications.",
    openGraph: {
        title: "Convergence UI",
        description: "A comprehensive UI kit for modern web applications.",
        url: "https://convergence.suryansu.pro",
        siteName: "Convergence UI",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Convergence UI",
        description: "A comprehensive UI kit for modern web applications.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${playfairSerif.variable} antialiased`}
            >
                <Convergence />
                <Toaster />
                <ClickSound />
                <ClickSpark
                    sparkColor="#739072"
                    sparkSize={12}
                    sparkRadius={26}
                    sparkCount={8}
                    duration={500}
                    easing="ease-out"
                    extraScale={1}
                >
                    {children}
                </ClickSpark>
            </body>
        </html>
    );
}
