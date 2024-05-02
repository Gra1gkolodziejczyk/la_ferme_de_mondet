import Head from "next/head";
import Image from "next/image";
import fermier from "@/public/fermier.png";
import footerImage from "@/public/footerImage.png";
import imageFerme from "@/public/image.png";
import imgHeader from "@/public/imgHeader.png";

export default function Home() {
  return (
    <>
      {/* <Head></Head> */}
      {/* Header */}
      <div className="mr-20 ml-20 h-screen">
        <div className="h-20 border-b border-FFF5D0">
          <Image
            alt="La ferme de Mondet | logo"
            src={imgHeader}
            width={120}
            height={120}
            className="absolute top-0"
          />
          <div className="flex justify-center text-center mt-11">
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
        </div>
        <div className="flex justify-center content-center items-center text-center mt-20 z-40">
          <h1 className="text-5xl">Bienvenue à la ferme de Mondet !</h1>
        </div>
        <Image
          src={imageFerme}
          alt="La ferme de Mondet | Ferme"
          className="absolute bottom-0 -z-10 -ml-20 pb-36"
          width={10000}
          height={1000}
        />
      </div>
      {/* Horaires */}
      <div className="flex h-auto -mt-48 bg-[#FFF5D0]">
        <div className="w-1/3 justify-center content-center items-center text-center">
          <div>
            <h2 className="text-black text-xl">CONTACT</h2>
            <h2 className="text-black text-xl">les volailles de Mondet</h2>
            <h2 className="text-black text-xl">47400 TONNEINS</h2>
            <h2 className="text-black text-xl">06 59 45 33 35</h2>
            <h2 className="text-black text-xl">lafermedemondet@gmail.com</h2>
          </div>
          <div className="flex justify-center items-center content-center mb-10 mt-10">
            <div className="w-48 h-1 bg-black"></div>
          </div>
          <div>
            <div>
              <h2 className="text-black text-xl">HORAIRES</h2>
              <div className="flex flex-row justify-center items-center content-center text-center">
                <h2 className="text-black text-xl mr-10">Lundi </h2>
                <h2 className="text-black text-xl">15h - 18h</h2>
              </div>
              <div className="flex flex-row justify-center items-center content-center text-center">
                <h2 className="text-black text-xl mr-10">Mercredi </h2>
                <h2 className="text-black text-xl">15h - 18h</h2>
              </div>
              <div className="flex flex-row justify-center items-center content-center text-center">
                <h2 className="text-black text-xl mr-10">Vendredi </h2>
                <h2 className="text-black text-xl">15h - 18h</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 flex flex-col justify-center content-center items-center text-center">
          <h1 className="text-black text-2xl mt-5">CARTE</h1>
          <Image
            src={fermier}
            alt="la ferme de Mondet | fermier"
            className="max-w-full h-auto rounded-2xl mt-10 mb-10"
          />
        </div>
        <div className="w-1/3 justify-center content-center items-center text-center">
          <div>
            <div>
              <h2 className="text-black text-xl mb-10">DIRECTION</h2>
              <div className="flex flex-col justify-center items-center text-center content-center">
                <div className="flex flex-row items-start justify-start content-start text-start mb-4">
                  <h2 className="text-black text-xl mr-10">Bordeaux </h2>
                  <h2 className="text-black text-xl">1H</h2>
                </div>
                <div className="flex flex-row items-start justify-start content-start text-start mb-4">
                  <h2 className="text-black text-xl mr-10">Montauban </h2>
                  <h2 className="text-black text-xl">1H</h2>
                </div>
                <div className="flex flex-row items-start justify-start content-start text-start mb-4">
                  <h2 className="text-black text-xl mr-10">Mont de Marsan </h2>
                  <h2 className="text-black text-xl">1H</h2>
                </div>
                <div className="flex flex-row items-start justify-start content-start text-start mb-4">
                  <h2 className="text-black text-xl mr-10">Auch </h2>
                  <h2 className="text-black text-xl">1H</h2>
                </div>
                <div className="flex flex-row items-start justify-start content-start text-start mb-4">
                  <h2 className="text-black text-xl mr-10">Cahors </h2>
                  <h2 className="text-black text-xl">1H30</h2>
                </div>
                <div className="flex flex-row items-start justify-start content-start text-start">
                  <h2 className="text-black text-xl mr-10">Périgueux </h2>
                  <h2 className="text-black text-xl">1H30</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Présentation */}
      <div className="flex flex-col justify-center items-center content-center text-center mt-10">
        <h1 className="text-6xl">Présentation</h1>
        <div className="flex flex-row justify-center text-center ml-28 mr-28">
          <div className="flex justify-center text-center mt-24">
            <p className="pr-32">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab neque
              recusandae accusantium eum aliquid at sit, ad fugit molestias nisi
              suscipit nihil? Iure debitis ea obcaecati in repellat dolor
              doloribus. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Necessitatibus sequi libero, asperiores nemo minus
              blanditiis cumque minima veritatis deserunt quam repudiandae
              reprehenderit ipsam accusamus? Maxime modi sit deleniti.
              Aspernatur, ratione!
            </p>
          </div>
          <Image
            className="rounded-xl"
            alt="La ferme de Mondet | Fermier"
            src={fermier}
          />
        </div>
        <div className="flex flex-row justify-center text-center ml-28 mr-28">
          <Image
            className="rounded-xl"
            alt="La ferme de Mondet | Fermier"
            src={fermier}
          />
          <div className="flex justify-center text-center mt-24">
            <p className="pl-32">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab neque
              recusandae accusantium eum aliquid at sit, ad fugit molestias nisi
              suscipit nihil? Iure debitis ea obcaecati in repellat dolor
              doloribus. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Necessitatibus sequi libero, asperiores nemo minus
              blanditiis cumque minima veritatis deserunt quam repudiandae
              reprehenderit ipsam accusamus? Maxime modi sit deleniti.
              Aspernatur, ratione!
            </p>
          </div>
        </div>
      </div>
      {/* Volailles */}
      <div></div>
      {/* Footer */}
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
}
