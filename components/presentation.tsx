import Image from "next/image";
import React from "react";
import elevage from "@/public/187465019.jpg";

const Presentation = () => {
  return (
    <div
      id="presentation"
      className="flex flex-col justify-center items-center mt-10"
    >
      <h1 color="secondary" className="text-6xl">
        Présentation
      </h1>
      <div className="flex flex-col md:flex-col justify-center items-center mt-10 px-4">
        <div className="mt-32 mb-32 flex md:flex-row justify-center items-center self-center content-center md:ml-8 md:mr-8">
          <p
            color="secondary"
            className="text-4xl md:text-left md:pr-8 mb-6 md:mb-0 "
          >
            Je m&apos;appelle Rémi Duprat et je vends mes volailles depuis
            plusieurs années selon les saisons et les besoins de mes clients.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-10 md:ml-8 md:mr-8">
          <Image
            className="rounded-xl"
            alt="La ferme de Mondet | Fermier"
            src={elevage}
            width={400}
            height={300}
          />
          <p
            color="secondary"
            className="text-center text-2xl md:text-left md:pl-8 mt-6 md:mt-0"
          >
            Situé à Tonneins 47 Lot et Garonne,
            <br />
            Nous pouvons vous fournir toutes les volailles,sur simple demande de
            votre part.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
