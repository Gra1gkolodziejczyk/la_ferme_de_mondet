import Image from "next/image";
import Link from "next/link";
import React from "react";
import imgHeader from "@/public/imgHeader.png";

function Header() {
  return (
    <>
      <div className="z-10 w-100 h-24 border-b-2 border-b-yellow-500">
        <div className="absolute top-0 mt-5 ml-5">
          <Image
            alt="ferme de Mondet"
            src={imgHeader}
            width={120}
            height={120}
          />
        </div>
        <div className="flex justify-center items-center text-center mt-14">
          <h2 className="ml-24 text-2xl text-yellow-400 hover:text-yellow-500">
            Accueil
          </h2>
          <h2 className="ml-24 text-2xl text-yellow-400 hover:text-yellow-500">
            Présentation
          </h2>
          <h2 className="ml-24 text-2xl text-yellow-400 hover:text-yellow-500">
            Volailles
          </h2>
        </div>
      </div>
    </>
  );
}

export default Header;
