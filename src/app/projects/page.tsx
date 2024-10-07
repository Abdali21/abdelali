import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { link } from "fs";
import { Layers } from "lucide-react";

const projectsPage = () => {

  const Projects = [
    {
      title: "Houmaidi Shop",
      url: "/houmaidi.png",
      tags: ["Nextjs", "Tailwindcss", "Typescript"],
      link: "https://houmaidishop.vercel.app/",
    },
    {
      title: "Learning Platform",
      url: "/learningPlatform.png",
      tags: ["Nextjs", "Tailwindcss", "Typescript"],
      link: "https://learning-platform-lovat-three.vercel.app/",
    },
    {
      title: "airbnb-clone",
      url: "/airbnbClone.png",
      tags: ["Nextjs", "Tailwindcss", "Typescript"],
      link: "https://next-bnb-nu.vercel.app/",
    },
    {
      title: "burger-project",
      url: "/burgerProject.png",
      tags: ["Nextjs", "Tailwindcss", "Typescript"],
      link: "https://burger-project-woad.vercel.app/",
    },
    {
      title: "real-estate",
      url: "/estate.png",
      tags: ["Next.js", "Tailwindcss", "Typescript"],
      link: "https://real-estate-beryl-nu.vercel.app"
    },
    {
      title: "Homi",
      url: "/homii.png",
      tags: ["Next.js", "Tailwindcss", "Typescript"],
      link: "https://homi-phi.vercel.app"
    }
  ];

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-6 w-6" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg text-muted-foreground w-full  mt-3 mb-4 max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-4 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
