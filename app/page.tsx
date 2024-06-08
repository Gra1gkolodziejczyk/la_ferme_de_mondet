import Footer from "@/components/footer";
import Header from "@/components/header";
import Horaires from "@/components/horaires";
import Image from "next/image";
import { Metadata } from "next";
import Presentation from "@/components/presentation";
import Slider from "@/components/slider";
import { Typography } from "@mui/material";
import imageFerme from "@/public/image.png";

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
    "la ferme de Mondet",
    "vente volailles tonneins",
    "tonneins volailles",
    "tonneins 47400",
    "tonneins",
    "Rémi Duprat",
    "poules Tonneins",
    "poules pondeuses tonneins",
  ],
};

const slides = [
  {
    image: "/poule-pondeuse.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/poule-pondeuse-2.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/poule-pondeuse-3.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/poule-pondeuse-4.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/poussin.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/poule-oeufs-colorés.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/poule-oeufs-colorés-2.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/poule-oeufs-colorés-3.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/poule-oeufs-colorés-4.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/poule-ornements.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/poule-ornements-2.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/poule-ornements-3.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/poule-ornements-4.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/poule-ornements-5.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/poule-ornements-6.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/poule-ornements-7.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/poule-ornements-8.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/canetons.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/canetons-2.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/canetons-3.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/canetons-4.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/oisons.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/oisons-2.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/oisons-3.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/dindonneaux.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/dindonneaux-2.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/gibiers.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/gibiers-2.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/gibiers-3.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
  {
    image: "/gibiers-4.png",
    description:
      "Voici les volailles que je propose à la vente, veuillez me contacter pour toutes informations complémentaires.",
  },
];

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div id="accueil" className="max-h-screen">
        <div className="flex justify-center items-center content-center text-center mt-36 z-40">
          <Typography variant="h1" color="secondary" className="mt-20">
            Bienvenue à la ferme de Mondet !
          </Typography>
        </div>
        <Image
          alt="la ferme de mondet | image"
          src={imageFerme}
          className="bottom-0 mt-7"
        />
      </div>
      <Horaires />
      <Presentation />
      <Slider slides={slides} />
      <Footer />
    </>
  );
};

export default Home;
