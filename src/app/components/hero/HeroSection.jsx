import Image from "next/image";
import heroSectionImage from "./heroImage.jpg";
import image2 from "./moc-3.png";

const HeroSection = () => {
  return (
    <div className="w-full flex justify-evenly flex-wrap">
      <div className="w-1/2 p-2 flex flex-col justify-center items-center">
        <h1 className="text-2xl">where trust meets prosperity</h1>
        <p>Join our trusted family to explore a world of financial</p>
        <p>opportunities and wealth creation.</p>
      </div>
      <div className="w-1/2 p-2">
        <Image src={image2} className="object-fill" alt="hero" />
      </div>
    </div>
  );
};

export default HeroSection;
