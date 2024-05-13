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
  robots: "index, follow",
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
