import TextRotator from "./TextRotator";

 
const HeroTexts = () => {
 
  
  return (
    <>
      <h3 className="font-poppins text-2xl max-sm:text-xl text-muted-foreground" >👋🏻 Hello,</h3>
      <h1 className="font-rubik text-7xl name_underline text-primary max-sm:text-5xl " >
         I&apos;m Abdelali<br /> Houmaidi.
      </h1>
        <TextRotator/>
    </>
  );
};
export default HeroTexts