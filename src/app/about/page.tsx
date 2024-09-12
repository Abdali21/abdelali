import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, LanguagesIcon, User2 } from "lucide-react";

const page = () => {
  const languages = [
    {
      language: "Arabic",
      level: "Native",
      icon: <ChevronRight className="h-5 w-5" />,
    },
    {
      language: "English",
      level: "Intermediate",
      icon: <ChevronRight className="h-5 w-5" />,
    },
    {
      language: "French",
      level: "Intermediate",
      icon: <ChevronRight className="h-5 w-5" />,
    },
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <User2 className="h-6 w-6" />
        About me
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>
          Full-Stack Web Developer <br />
        </Heading>

        <FramerWrapper y={0} x={100}>
          <p className=" font-poppins text-lg text-muted-foreground w-full mt-3 mb-4  max-sm:text-lg">
            I am Abdelali Houmaidi, a full-stack web developer with a focus on front-end development.
            I specialize in using the MERN stack,
            Next.js, TypeScript, Tailwind CSS, and developing RESTful APIs.
            Check out my latest work and recorded project videos on my LinkedIn profile.
            For a comprehensive view of my portfolio and projects, visit my website. Detailed project information and updates
            are also available on my GitHub. Connect with me on LinkedIn to stay updated and network.
          </p>
        </FramerWrapper>
      </div>
      <FramerWrapper className="w-full flex flex-col gap-8" y={100} delay={0.3}>
        <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold relative flex items-center icon_underline max-sm:text-2xl">
          <span>
            <LanguagesIcon />
          </span>
          Languages
        </h1>
        <div className="w-full flex flex-col gap-2">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="flex items-center justify-start gap-2 text-lg text-primary"
            >
              <span className="h-4 w-4">{lang.icon}</span>
              <span className="text-primary font-semibold">
                {lang.language}
              </span>{" "}
              -{" "}
              <span className="text-medium text-muted-foreground ">
                {lang.level}
              </span>
            </div>
          ))}
        </div>
      </FramerWrapper>
    </div>
  );
};

export default page;
