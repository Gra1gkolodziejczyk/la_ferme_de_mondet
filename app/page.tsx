import Footer from "@/components/footer";
import Header from "@/components/header";
import Horaires from "@/components/horaires";
import Image from "next/image";
import Presentation from "@/components/presentation";
import Slider from "@/components/slider";
import imageFerme from "@/public/Design_sans_titre1.png";

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
      <div id="accueil" className="max-h-screen -z-10">
        <div className="image-container">
          <Image
            alt="la ferme de mondet | image"
            src={imageFerme}
            width={500}
            height={500}
          />
        </div>
      </div>
      <Horaires />
      <Presentation />
      <Slider slides={slides} />
      <Footer />
    </>
  );
};

export default Home;
