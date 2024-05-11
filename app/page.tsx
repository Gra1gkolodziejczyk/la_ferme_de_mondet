"use client";

import Head from "next/head";
import Image from "next/image";
import type { Metadata } from "next";
import Slider from "@/components/slider";
import elevage from "@/public/187465019.jpg";
import fermier from "@/public/fermier.png";
import footerImage from "@/public/footerImage.png";
import imageFerme from "@/public/image.png";
import imgHeader from "@/public/imgHeader.png";
import { useState } from "react";

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

const Home: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>("Bordeaux");

  interface CityImages {
    [key: string]: string;
  }

  const cityImages: CityImages = {
    Bordeaux: "/Bordeaux.png",
    Monteauban: "/Monteauban.png",
    Montdemarsan: "/Mont-de-marsan.png",
    Auch: "/Auch.png",
    Cahors: "/Cahors.png",
    Périgueux: "/Perigueux.png",
  };

  const handleCityClick = (city: string) => {
    setSelectedCity(city);
  };

  return (
    <>
      <Head>
        <title>La Ferme de Mondet</title>
        <meta property="og:title" content="La ferme de Mondet | Volailles" />
      </Head>
      <div className="mr-20 ml-20 h-screen">
        <div className="h-20 border-b border-FFF5D0">
          <Image
            alt="La ferme de Mondet | logo"
            src={imgHeader}
            width={120}
            height={120}
            className="absolute top-0 m-5"
          />
          <div className="hidden md:flex justify-center text-center mt-11">
            <h2 className="mr-7 text-2xl cursor-pointer hover:text-yellow-500">
              Accueil
            </h2>
            <h2 className="mr-7 text-2xl cursor-pointer hover:text-yellow-500">
              Présentation
            </h2>
            <h2 className="text-2xl cursor-pointer hover:text-yellow-500">
              Volailles
            </h2>
          </div>
          <div className="md:hidden flex justify-end pr-5 mt-10 mr-3 text-[#FFF5D0]">
            <svg
              className="w-10 h-10 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-center content-center items-center text-center mt-20 z-40">
          <h1 className="text-5xl">Bienvenue à la ferme de Mondet !</h1>
        </div>
        <Image
          src={imageFerme}
          alt="La ferme de Mondet | Ferme"
          className="flex-none hidden md:block absolute bottom-0 -z-10 -ml-20 pb-36"
          width={10000}
          height={1000}
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between h-auto -mt-48 bg-[#FFF5D0]">
        <div className="w-full md:w-1/3 flex flex-col justify-center items-center text-center md:text-left md:items-start px-6 py-10">
          <h2 className="text-black text-xl mb-4">CONTACT</h2>
          <div className="w-full md:w-2/3 flex flex-col mb-6">
            <h2 className="text-black text-xl">Les Volailles de Mondet</h2>
            <h2 className="text-black text-xl">47400 Tonneins</h2>
            <h2 className="text-black text-xl">06 59 45 33 35</h2>
            <h2 className="text-black text-xl">lafermedemondet@gmail.com</h2>
          </div>
          <div className="w-full h-1 bg-black mb-6"></div>
          <div className="w-full md:w-2/3 flex flex-col">
            <h2 className="text-black text-xl mb-2">HORAIRES</h2>
            <div className="flex flex-col">
              <div className="flex justify-between mb-2">
                <h2 className="text-black text-xl">Lundi</h2>
                <h2 className="text-black text-xl">15h - 18h</h2>
              </div>
              <div className="flex justify-between mb-2">
                <h2 className="text-black text-xl">Mercredi</h2>
                <h2 className="text-black text-xl">15h - 18h</h2>
              </div>
              <div className="flex justify-between">
                <h2 className="text-black text-xl">Vendredi</h2>
                <h2 className="text-black text-xl">15h - 18h</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex flex-col justify-center items-center text-center px-6 py-10">
          <h1 className="text-black text-2xl mb-6">CARTE</h1>
          <Image
            src={selectedCity && cityImages[selectedCity]}
            alt={`la ferme de Mondet | ${selectedCity}`}
            width={500}
            height={500}
            className="max-w-full h-auto rounded-2xl"
          />
        </div>

        <div className="w-full md:w-1/3 flex flex-col justify-center items-center text-center px-6 py-10">
          <h2 className="text-black text-xl mb-6">DIRECTION</h2>
          <div className="w-full md:w-2/3 flex flex-col">
            <div className="flex justify-between mb-2">
              <h2
                className={`text-black text-xl cursor-pointer ${
                  selectedCity === "Bordeaux" ? "underline" : ""
                }`}
                onClick={() => handleCityClick("Bordeaux")}
              >
                Bordeaux
              </h2>
              <h2 className="text-black text-xl">1H</h2>
            </div>
            <div className="flex justify-between mb-2">
              <h2
                className={`text-black text-xl cursor-pointer ${
                  selectedCity === "Monteauban" ? "underline" : ""
                }`}
                onClick={() => handleCityClick("Monteauban")}
              >
                Monteauban
              </h2>
              <h2 className="text-black text-xl">1H</h2>
            </div>
            <div className="flex justify-between mb-2">
              <h2
                className={`text-black text-xl cursor-pointer ${
                  selectedCity === "Montdemarsan" ? "underline" : ""
                }`}
                onClick={() => handleCityClick("Montdemarsan")}
              >
                Mont de marsan
              </h2>
              <h2 className="text-black text-xl">1H</h2>
            </div>
            <div className="flex justify-between mb-2">
              <h2
                className={`text-black text-xl cursor-pointer ${
                  selectedCity === "Auch" ? "underline" : ""
                }`}
                onClick={() => handleCityClick("Auch")}
              >
                Auch
              </h2>
              <h2 className="text-black text-xl">1H30</h2>
            </div>
            <div className="flex justify-between mb-2">
              <h2
                className={`text-black text-xl cursor-pointer ${
                  selectedCity === "Cahors" ? "underline" : ""
                }`}
                onClick={() => handleCityClick("Cahors")}
              >
                Cahors
              </h2>
              <h2 className="text-black text-xl">1H30</h2>
            </div>
            <div className="flex justify-between">
              <h2
                className={`text-black text-xl cursor-pointer ${
                  selectedCity === "Périgueux" ? "underline" : ""
                }`}
                onClick={() => handleCityClick("Périgueux")}
              >
                Périgueux
              </h2>
              <h2 className="text-black text-xl">1H30</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-6xl">Présentation</h1>
        <div className="flex flex-col md:flex-col justify-center items-center mt-10 px-4">
          <div className="flex flex-col md:flex-row justify-center items-center md:ml-8 md:mr-8">
            <p className="text-center md:text-left md:pr-8 mb-6 md:mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab neque
              recusandae accusantium eum aliquid at sit, ad fugit molestias nisi
              suscipit nihil? Iure debitis ea obcaecati in repellat dolor
              doloribus. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Necessitatibus sequi libero, asperiores nemo minus
              blanditiis cumque minima veritatis deserunt quam repudiandae
              reprehenderit ipsam accusamus? Maxime modi sit deleniti.
              Aspernatur, ratione!
            </p>
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
            <p className="text-center md:text-left md:pl-8 mt-6 md:mt-0">
              Situé à Tonneins 47 Lot et Garonne,
              <br />
              Nous pouvons vous fournir toutes les volailles,sur simple demande
              de votre part.
            </p>
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
