import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La ferme de Mondet",
  description: "",
  robots: "index, follow",
  authors: [
    {
      name: "Graig KOLODZIEJCZYK",
      url: "https://www.linkedin.com/in/graig-kolodziejczyk-1482241b8/",
    },
  ],
  openGraph: {
    type: "website",
  },
  keywords: [
    "la ferme de Mondet",
    "vente volailles tonneins",
    "tonneins volailles",
    "tonneins 47400",
    "tonneins",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
