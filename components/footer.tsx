import Image from "next/image";
import React from "react";
import footerImage from "@/public/footerImage.png";

const Footer = () => {
  return (
    <div className="h-72 mt-20 bg-[#FFF5D0] flex flex-col items-center justify-center text-center content-center">
      <Image
        alt="la ferme de mondet | Logo"
        src={footerImage}
        width={300}
        height={300}
      />
      <div className="mt-10">Développé par CodingBros.</div>
    </div>
  );
};

export default Footer;
