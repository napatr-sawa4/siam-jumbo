import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
export const metadata: Metadata = { title: "Siam Jumbo | Thai food exports", description: "Vegetables, tropical fruits, Thai jasmine rice and crispy fruit from Siam Jumbo International, Thailand.", robots: { index: false, follow: false } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
