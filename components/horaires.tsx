"use client";

import React, { useState } from "react";

import Image from "next/image";
import { Typography } from "@mui/material";

const Horaires = () => {
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
    <div className="flex flex-col md:flex-row justify-between h-auto bg-[#FFF5D0]">
      <div className="w-full md:w-1/3 flex flex-col justify-center items-center text-center md:text-left md:items-start px-6 py-10">
        <div className="w-full md:w-2/3 flex flex-col">
          <Typography
            variant="h1"
            color="primary"
            className="text-xl mb-2 font-bold underline"
          >
            HORAIRES
          </Typography>
          <div className="flex flex-col">
            <div className="flex justify-between mb-2">
              <Typography variant="h2" className="text-black text-xl">
                Sur Rendez-vous
              </Typography>
            </div>
          </div>
        </div>
        <div className="w-full h-1 bg-black mb-6"></div>
        <Typography
          variant="h1"
          color="primary"
          className="text-xl mb-4 font-bold underline"
        >
          CONTACT
        </Typography>
        <div className="w-full md:w-2/3 flex flex-col mb-6">
          <Typography variant="h2" className="text-black text-xl">
            Les Volailles de Mondet
          </Typography>
          <Typography variant="h2" className="text-black text-xl">
            47400 Tonneins
          </Typography>
          <Typography variant="h2" className="text-black text-xl">
            06 59 45 33 35
          </Typography>
          <Typography variant="h2" className="text-black text-xl">
            lafermedemondet@gmail.com
          </Typography>
        </div>
      </div>

      <div className="w-full md:w-1/3 flex flex-col justify-center items-center text-center px-6 py-10">
        <Typography
          variant="h1"
          color="primary"
          className="text-2xl mb-6 font-bold underline"
        >
          CARTE
        </Typography>
        <Image
          src={selectedCity && cityImages[selectedCity]}
          alt={`la ferme de Mondet | ${selectedCity}`}
          width={500}
          height={500}
          className="max-w-full h-auto rounded-2xl"
        />
      </div>

      <div className="w-full md:w-1/3 flex flex-col justify-center items-center text-center px-6 py-10">
        <Typography
          variant="h1"
          color="primary"
          className="text-black text-xl mb-6 font-bold underline"
        >
          DIRECTION
        </Typography>
        <div className="w-full md:w-2/3 flex flex-col">
          <div className="flex justify-between mb-2">
            <Typography
              variant="h2"
              className={`text-black text-xl cursor-pointer ${
                selectedCity === "Bordeaux" ? "underline" : ""
              }`}
              onClick={() => handleCityClick("Bordeaux")}
            >
              Bordeaux
            </Typography>
            <Typography variant="h2" className="text-black text-xl text-bold">
              1H
            </Typography>
          </div>
          <div className="flex justify-between mb-2">
            <Typography
              variant="h2"
              className={`text-black text-xl cursor-pointer ${
                selectedCity === "Monteauban" ? "underline" : ""
              }`}
              onClick={() => handleCityClick("Monteauban")}
            >
              Montauban
            </Typography>
            <Typography variant="h2" className="text-black text-xl">
              1H
            </Typography>
          </div>
          <div className="flex justify-between mb-2">
            <Typography
              variant="h2"
              className={`text-black text-xl cursor-pointer ${
                selectedCity === "Montdemarsan" ? "underline" : ""
              }`}
              onClick={() => handleCityClick("Montdemarsan")}
            >
              Mont de marsan
            </Typography>
            <Typography variant="h2" className="text-black text-xl">
              1H
            </Typography>
          </div>
          <div className="flex justify-between mb-2">
            <Typography
              variant="h2"
              className={`text-black text-xl cursor-pointer ${
                selectedCity === "Auch" ? "underline" : ""
              }`}
              onClick={() => handleCityClick("Auch")}
            >
              Auch
            </Typography>
            <Typography variant="h2" className="text-black text-xl">
              1H30
            </Typography>
          </div>
          <div className="flex justify-between mb-2">
            <Typography
              variant="h2"
              className={`text-black text-xl cursor-pointer ${
                selectedCity === "Cahors" ? "underline" : ""
              }`}
              onClick={() => handleCityClick("Cahors")}
            >
              Cahors
            </Typography>
            <Typography variant="h2" className="text-black text-xl">
              1H30
            </Typography>
          </div>
          <div className="flex justify-between">
            <Typography
              variant="h2"
              className={`text-black text-xl cursor-pointer ${
                selectedCity === "Périgueux" ? "underline" : ""
              }`}
              onClick={() => handleCityClick("Périgueux")}
            >
              Périgueux
            </Typography>
            <Typography variant="h2" className="text-black text-xl">
              1H30
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Horaires;
