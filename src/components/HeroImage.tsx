import profile from "../../public/logo.png";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="animate-slow-bounce">
      <Image
        src={profile}
        alt="logo"
        loading="eager"
        priority
        height={300}
        width={300}
      />
    </div>
  );
};

export default HeroImage;
