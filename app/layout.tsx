import "./globals.css";

import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "La ferme de Mondet",
  description:
    "La ferme de Mondet, située à Tonneins, vous permet d'avoir un visuel sur les volailles de qualité qu'elle vend, ainsi que sa localisation. Contacter le pour en savoir plus sur les prix des volailles.",
  robots: {
    follow: true,
    index: true,
  },
  authors: [
    {
      name: "Graig KOLODZIEJCZYK",
      url: "https://www.linkedin.com/in/graig-kolodziejczyk-1482241b8/",
    },
    {
      name: "Cédric VIDALIE",
      url: "https://www.linkedin.com/in/c%C3%A9dric-vidalie-035744230/",
    },
  ],
  openGraph: {
    type: "website",
  },
  keywords: [
    "Ferme de Mondet",
    "vente volailles Tonneins",
    "achat volailles 47400",
    "poules pondeuses Tonneins",
    "poules d'ornement Lot-et-Garonne",
    "ferme volailles Tonneins",
    "volailles Ferme de Mondet",
    "élevage volailles Tonneins",
    "poules pondeuses Lot-et-Garonne",
    "poules d'ornement Tonneins",
    "poules pondeuses à vendre Tonneins",
    "poules d'ornement à vendre 47400",
    "achat poules pondeuses Lot-et-Garonne",
    "vente volailles Tonneins 47400",
    "ferme avicole Tonneins",
    "ferme Rémi Duprat Tonneins",
    "vente poules d'ornement Tonneins",
    "poules pondeuses Ferme de Mondet",
    "volailles élevées en plein air Tonneins",
    "poules de ferme à Tonneins",
    "où acheter des poules pondeuses à Tonneins",
    "élevage de poules d'ornement à Tonneins",
    "acheter des volailles en Lot-et-Garonne",
    "vente directe de volailles à Tonneins",
    "ferme de volailles à Tonneins 47400",
    "Rémi Duprat Ferme de Mondet",
    "ferme avicole Rémi Duprat",
    "poules d'ornement élevées à Tonneins",
    "ferme de volailles Rémi Duprat Tonneins",
    "vente de poules et volailles à Tonneins",
    "volailles Tonneins 47400",
    "poules pondeuses Tonneins 47400",
    "poules d'ornement Tonneins 47400",
    "vente de poules Lot-et-Garonne",
    "ferme Rémi Duprat 47400",
    "poules et volailles Tonneins",
    "ferme avicole Lot-et-Garonne",
    "élevage de volailles 47400",
    "vente de poules à Tonneins",
    "Rémi Duprat Tonneins 47400",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
