import Image from "next/image";

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
          className="flex justify-center items-center content-center self-center mb-8 rounded-3xl"
          width={500}
          height={500}
        />
        <div className="flex flex-col justify-start text-start content-start items-start">
          <h2 className="text-4xl mb-4">Description</h2>
          <p className="text-white text-xl">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Slide;
