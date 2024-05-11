import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La ferme de Mondet",
  description: "",
  authors: [
    {
      name: "Graig KOLODZIEJCZYK",
      url: "https://www.linkedin.com/in/graig-kolodziejczyk-1482241b8/",
    },
  ],
  openGraph: {
    type: "website",
  },
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
