import Image from "next/image";
import React from "react";
import { Typography } from "@mui/material";
import elevage from "@/public/187465019.jpg";
import fermier from "@/public/fermier.png";

const Presentation = () => {
  return (
    <div
      id="presentation"
      className="flex flex-col justify-center items-center mt-10"
    >
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
            et je vends mes volailles depuis plusieurs années selon les saisons
            et les besoins de mes clients.
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
            Nous pouvons vous fournir toutes les volailles,sur simple demande de
            votre part.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
