"use client";

import { AppBar, Container, Drawer, Toolbar, Typography } from "@mui/material";
import { Close, Menu } from "@mui/icons-material";
import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import imgHeader from "@/public/imgHeader.png";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Container
            maxWidth="xl"
            className="flex items-center justify-between"
          >
            <Link href="/">
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
                <Typography
                  variant="h2"
                  color="secondary"
                  className="mr-7 text-2xl cursor-pointer hover:text-yellow-500"
                >
                  Accueil
                </Typography>
              </a>
              <a
                href="#presentation"
                onClick={() => scrollToSection("presentation")}
              >
                <Typography
                  variant="h2"
                  color="secondary"
                  className="mr-7 text-2xl cursor-pointer hover:text-yellow-500"
                >
                  Présentation
                </Typography>
              </a>
              <a href="#volailles" onClick={() => scrollToSection("volailles")}>
                <Typography
                  variant="h2"
                  color="secondary"
                  className="text-2xl cursor-pointer hover:text-yellow-500"
                >
                  Volailles
                </Typography>
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
          </Container>
        </Toolbar>
      </AppBar>

      {/* Drawer visible sur petit écran */}
      <Drawer anchor="top" open={drawerOpen} onClose={handleDrawerToggle}>
        <div className="pt-36 pb-10 bg-[#0F222D]">
          <div className="flex flex-col items-center">
            <a href="#accueil" onClick={() => scrollToSection("accueil")}>
              <Typography
                variant="h2"
                color="secondary"
                className="text-2xl cursor-pointer hover:text-yellow-500 my-2"
              >
                Accueil
              </Typography>
            </a>
            <a href="#presentation" onClick={() => scrollToSection("accueil")}>
              <Typography
                variant="h2"
                color="secondary"
                className="text-2xl cursor-pointer hover:text-yellow-500 my-2"
              >
                Présentation
              </Typography>
            </a>
            <a href="#volailles" onClick={() => scrollToSection("accueil")}>
              <Typography
                variant="h2"
                color="secondary"
                className="text-2xl cursor-pointer hover:text-yellow-500 my-2"
              >
                Volailles
              </Typography>
            </a>
          </div>
          <Close
            className="absolute top-0 right-0 m-4 cursor-pointer"
            onClick={handleDrawerToggle}
          />
        </div>
      </Drawer>
    </>
  );
};

export default Header;
