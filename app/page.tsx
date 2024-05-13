import { AppBar, Container, Typography } from "@mui/material";

import Head from "next/head";
import Horaires from "@/components/horaires";
import Image from "next/image";
import { Metadata } from "next";
import Slider from "@/components/slider";
import elevage from "@/public/187465019.jpg";
import fermier from "@/public/fermier.png";
import footerImage from "@/public/footerImage.png";
import imageFerme from "@/public/image.png";
import imgHeader from "@/public/imgHeader.png";

export const metadata: Metadata = {
  title: "La ferme de Mondet",
  description:
    "La ferme de Mondet, située à Tonneins, vous permet d'avoir un visuel sur les volailles de qualité qu'elle vend, ainsi que sa localisation. Contacter le pour en savoir plus sur les prix des volailles.",
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

const slides = [
  {
    image: "/poule-pondeuse.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam.",
  },
  {
    image: "/poule-pondeuse-2.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
  {
    image: "/poule-pondeuse-3.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
  {
    image: "/poule-pondeuse-4.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
  {
    image: "/poussin.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
  {
    image: "/poule-oeufs-colorés.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
  {
    image: "/poule-oeufs-colorés-2.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
  {
    image: "/poule-oeufs-colorés-3.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
  {
    image: "/poule-oeufs-colorés-4.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
  {
    image: "/poule-ornements.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
  {
    image: "/poule-ornements-2.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
  {
    image: "/poule-ornements-3.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
  {
    image: "/poule-ornements-4.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
  {
    image: "/poule-ornements-5.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
  {
    image: "/poule-ornements-6.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
  {
    image: "/poule-ornements-7.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
  {
    image: "/poule-ornements-8.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
  {
    image: "/canetons.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
  {
    image: "/canetons-2.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
  {
    image: "/canetons-3.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
  {
    image: "/canetons-4.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
  {
    image: "/oisons.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
  {
    image: "/oisons-2.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
  {
    image: "/oisons-3.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
  {
    image: "/dindonneaux.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
  {
    image: "/dindonneaux-2.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
  {
    image: "/gibiers.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
  {
    image: "/gibiers-2.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
  {
    image: "/gibiers-3.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
  {
    image: "/gibiers-4.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam aut, labore atque molestias quaerat eligendi illo, sapiente, hic non quod! Vitae quam doloremque eligendi dicta accusamus nemo repellat aliquam",
  },
];

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>La Ferme de Mondet</title>
        <meta property="og:title" content="La ferme de Mondet | Volailles" />
      </Head>
      <AppBar position="fixed" color="primary" className="z-1000 h-36">
        <Container maxWidth="xl">
          <Image
            alt="La ferme de Mondet | logo"
            src={imgHeader}
            width={120}
            height={120}
            className="absolute top-0 m-5"
          />
          <div className="flex justify-center text-center content-center mt-16">
            <Typography
              variant="h2"
              color="secondary"
              className="mr-7 text-2xl cursor-pointer hover:text-yellow-500"
            >
              Accueil
            </Typography>
            <Typography
              variant="h2"
              color="secondary"
              className="mr-7 text-2xl cursor-pointer hover:text-yellow-500"
            >
              Présentation
            </Typography>
            <Typography
              variant="h2"
              color="secondary"
              className="text-2xl cursor-pointer hover:text-yellow-500"
            >
              Volailles
            </Typography>
          </div>
        </Container>
      </AppBar>
      <div className="max-h-screen">
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

      <div className="flex flex-col justify-center items-center mt-10">
        <Typography variant="h1" color="secondary" className="text-6xl">
          Présentation
        </Typography>
        <div className="flex flex-col md:flex-col justify-center items-center mt-10 px-4">
          <div className="flex flex-col md:flex-row justify-center items-center md:ml-8 md:mr-8">
            <Typography
              variant="body1"
              color="secondary"
              className="text-center md:text-left md:pr-8 mb-6 md:mb-0"
            >
              Je m&apos;appelle Monsieur Mondet <br />
              et je vends mes volailles depuis plusieurs années selon les
              saisons et les besoins de mes clients.
            </Typography>
            <Image
              className="rounded-xl mt-6 md:mt-0 md:ml-8"
              alt="La ferme de Mondet | Fermier"
              src={fermier}
              width={400}
              height={300}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-10 md:ml-8 md:mr-8">
            <Image
              className="rounded-xl"
              alt="La ferme de Mondet | Fermier"
              src={elevage}
              width={400}
              height={300}
            />
            <Typography
              variant="body1"
              color="secondary"
              className="text-center md:text-left md:pl-8 mt-6 md:mt-0"
            >
              Situé à Tonneins 47 Lot et Garonne,
              <br />
              Nous pouvons vous fournir toutes les volailles,sur simple demande
              de votre part.
            </Typography>
          </div>
        </div>
      </div>

      <div>
        <Slider slides={slides} />
      </div>

      <div className="h-72 mt-20 bg-[#FFF5D0] flex items-center justify-center text-center content-center">
        <Image
          alt="la ferme de mondet | Logo"
          src={footerImage}
          width={300}
          height={300}
        />
      </div>
    </>
  );
};

export default Home;
