import profile from "../../public/profile.png";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="animate-slow-bounce">
      <Image
        src={profile}
        alt="logo"
        loading="eager"
        priority
        height={500}
        width={500}
      />
    </div>
  );
};

export default HeroImage;
