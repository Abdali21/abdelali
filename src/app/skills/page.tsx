import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import html from "../../../public/html.png";
import css from "../../../public/css.png";
import js from "../../../public/js.png";
import ts from "../../../public/ts.png";
import react from "../../../public/react.png";
import nextjs from "../../../public/nextjs.jpeg";
import tailwind from "../../../public/tailwindcss.png";
import github from "../../../public/github.png";
import vscode from "../../../public/vscode.png";
import nodejs from "../../../public/node.png";
import expressjs from "../../../public/express.png";
import mongodb from "../../../public/mongodb.png";
import prisma from "../../../public/prisma.png";
import Image, { StaticImageData } from "next/image";
import FramerWrapper from "@/components/FramerWrapper";

const SkillPage = () => {
  const frontend = [
    { alt: "HTML", img: html },
    { alt: "CSS", img: css },
    { alt: "JavaScript", img: js },
    { alt: "TypeScript", img: ts },
    { alt: "React", img: react },
    { alt: "Next.js", img: nextjs },
    { alt: "Tailwind CSS", img: tailwind },
  ];

  const backend = [
    { alt: "Node.js", img: nodejs },
    { alt: "Express.js", img: expressjs },
  ];

  const database = [
    { alt: "MongoDB", img: mongodb },
    { alt: "Prisma", img: prisma },
  ];

  const versionControl = [
    { alt: "GitHub", img: github },
    { alt: "VS Code", img: vscode },
  ];

  const renderFrontend = (skills: { alt: string; img: StaticImageData }[]) => (
    <div className="w-full h-fit flex flex-wrap justify-between sm:space-x-10 items-center">
      {skills.map((skill) => (
        <div key={skill.alt} className="flex flex-col items-center">
          <Image
            src={skill.img}
            alt={skill.alt}
            width={80}
            height={80}
            className="rounded-full hover:translate-y-3 mt-5 sm:mt-0 duration-300"
          />
        </div>
      ))}
    </div>
  );

  const renderskills = (items: { alt: string; img: StaticImageData }[]) => {
    return (
      <div className="flex items-center justify-start space-x-10">
        {items.map((item) => (
          <div className="flex items-center my-2" key={item.alt}>
            <Image
              src={item.img}
              alt={item.alt}
              height={90}
              width={90}
              className="rounded-full hover:translate-y-3 duration-300"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className="gap-2">
        <Lightbulb className="h-6 w-6" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Technical Skills</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-lg w-full text-muted-foreground mt-3 mb-4 max-sm:text-lg">
            As a full-stack web developer, I have a strong foundation in HTML5,
            CSS3, JavaScript, TypeScript, and React, with a focus on responsive
            design principles. I specialize in developing web applications and
            websites using JavaScript, TypeScript, React, Next.js, Node.js,
            Prisma, Express.js, and MongoDB.
          </p>
        </FramerWrapper>

        <FramerWrapper y={100} delay={0.3} className="block">
          <h1 className="gap-2 mt-8 mb-4 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Frontend
          </h1>
          {renderFrontend(frontend)}
        </FramerWrapper>

        <FramerWrapper y={100} delay={0.32} className="block">
        <h1 className="gap-2 mt-8 mb-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Backend
          </h1>
          {renderskills(backend)}
        </FramerWrapper>

        <FramerWrapper y={100} delay={0.34} className="block">
        <h1 className="gap-2 mt-6 mb-4 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Database Management
          </h1>
          {renderskills(database)}
        </FramerWrapper>

        <FramerWrapper y={100} delay={0.36} className="block">
        <h1 className="gap-2 mt-8 mb-4 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Version Control
          </h1>
          {renderskills(versionControl)}
        </FramerWrapper>
      </div>
    </div>
  );
};
export default SkillPage;
