"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";

import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ui/modeToggle";
import imgHeader from "@/public/imgHeader.png";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      {/* <Link href="/">
        <Image
          alt="La ferme de Mondet | logo"
          src={imgHeader}
          width={120}
          height={120}
          className="m-5 cursor-pointer"
        />
      </Link>
      <div className="hidden md:flex justify-center text-center content-center">
        <a href="#accueil" onClick={() => scrollToSection("accueil")}>
          <h2 className="mr-7 text-2xl cursor-pointer hover:text-yellow-500">
            Accueil
          </h2>
        </a>
        <a href="#presentation" onClick={() => scrollToSection("presentation")}>
          <h2 className="mr-7 text-2xl cursor-pointer hover:text-yellow-500">
            Présentation
          </h2>
        </a>
        <a href="#volailles" onClick={() => scrollToSection("volailles")}>
          <h2
            color="secondary"
            className="text-2xl cursor-pointer hover:text-yellow-500"
          >
            Volailles
          </h2>
        </a>
      </div>
      {drawerOpen ? (
        <Close
          onClick={handleDrawerToggle}
          className="md:hidden mr-5 text-3xl cursor-pointer hover:text-yellow-500"
        />
      ) : (
        <Menu
          className="md:hidden mr-5 text-3xl cursor-pointer hover:text-yellow-500"
          onClick={handleDrawerToggle}
        />
      )}
      <div className="pt-36 pb-10 bg-[#0F222D]">
        <div className="flex flex-col items-center">
          <a href="#accueil" onClick={() => scrollToSection("accueil")}>
            <Button
              variant="link"
              color="secondary"
              className="text-2xl cursor-pointer hover:text-yellow-500 my-2"
            >
              Accueil
            </Button>
          </a>
          <a
            href="#presentation"
            className="decoration-none"
            onClick={() => scrollToSection("accueil")}
          >
            <Button
              variant="link"
              color="secondary"
              className="text-2xl cursor-pointer hover:text-yellow-500 my-2"
            >
              Présentation
            </Button>
          </a>
          <a href="#volailles" onClick={() => scrollToSection("accueil")}>
            <Button
              variant="link"
              color="secondary"
              className="text-2xl cursor-pointer hover:text-yellow-500 my-2"
            >
              Volailles
            </Button>
          </a>
        </div>
        <Close
          className="absolute top-0 right-0 m-4 cursor-pointer"
          onClick={handleDrawerToggle}
        />
      </div> 
      */}

      <div className="bg-background w-full h-[80px] flex justify-between items-center px-10 mt-4">
        <Link href="/">
          <Image
            src={imgHeader}
            alt="React | Image"
            priority={true}
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </Link>
        <div className="ml-3 hidden md:flex">
          <Button
            variant="link"
            className="text-yellow-200 hover:text-yellow-500"
          >
            Accueil
          </Button>
          <Button
            variant="link"
            className="text-yellow-200 hover:text-yellow-500"
          >
            Présentation
          </Button>
          <Button
            variant="link"
            className="text-yellow-200 hover:text-yellow-500"
          >
            Volailles
          </Button>
        </div>

        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? (
            <FaBars className="text-yellow-200" />
          ) : (
            <FaTimes className="text-yellow-200" />
          )}
        </div>

        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-background"
          }
        >
          <li className="py-6">
            <Button
              variant="link"
              className="text-yellow-200 hover:text-yellow-500"
            >
              Accueil
            </Button>
          </li>
          <li className="py-6">
            <Button
              variant="link"
              className="text-yellow-200 hover:text-yellow-500"
            >
              Présentation
            </Button>
          </li>
          <li className="py-6">
            <Button
              variant="link"
              className="text-yellow-200 hover:text-yellow-500"
            >
              Vollailes
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
