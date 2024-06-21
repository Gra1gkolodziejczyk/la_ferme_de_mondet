import Image from "next/image";
import { Typography } from "@mui/material";

interface SliderProps {
  image: string;
  description: string;
  isActive: boolean;
}

const Slide: React.FC<SliderProps> = ({ image, description, isActive }) => {
  return (
    <>
      <div className={`slide ${isActive ? "flex flex-col mt-20" : "hidden"}`}>
        <Image
          src={image}
          alt="Slide"
          className="mb-8 rounded-3xl"
          width={500}
          height={500}
          layout="responsive"
          objectFit="contain"
        />
        <div className="flex flex-col justify-center text-center items-center mt-20">
          <Typography
            variant="body1"
            className="text-white text-4xl mt-14 mb-14"
          >
            {description}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Slide;
