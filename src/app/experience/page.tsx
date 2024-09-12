import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const EducationPage = () => {
  return (
    <div className="flex flex-col gap-y-3 ">
      <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
        <Badge className="flex items-center gap-2">
          <Briefcase className="h-6 w-6" />
          Experience
        </Badge>
        <div className="flex flex-col gap-3">
          <Heading>My Education</Heading>
        </div>
        <div className="w-full h-fit flex flex-col">
          <div className="w-full h-fit flex">
            <FramerWrapper
              y={0}
              x={-100}
              delay={0.35}
              className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base"
            >
              Sep 2022 - Jun 2024
            </FramerWrapper>
            <FramerWrapper
              y={0}
              x={100}
              delay={0.35}
              className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point"
            >
              <div className="text-xl font-rubik max-sm:text-xl my-2">
                Diploma, Specialized Institute Of Applied Technology NTIC
              </div>
              <p className="font-poppins text-base w-full text-muted-foreground max-sm:text-xs">
                I completed a diploma program at the Specialized Institute Of
                Applied Technology NTIC from September 6, 2022, to June 26, 2024.
                The program provided a comprehensive education in technology,
                emphasizing both theoretical knowledge and practical skills.
              </p>
            </FramerWrapper>
          </div>
        </div>
      </div>
      <hr />
      <div className="h-full w-full relative flex flex-col items-start gap-5 my-3 overflow-hidden">
        <div className="flex flex-col gap-3">
          <Heading>My Experience</Heading>
        </div>
        <div className="w-full h-fit flex flex-col">
          <div className="w-full h-fit flex">
            <FramerWrapper
              y={0}
              x={-100}
              delay={0.35}
              className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base"
            >
              25 Feb - 15 Mar 2024
            </FramerWrapper>
            <FramerWrapper
              y={0}
              x={100}
              delay={0.35}
              className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point"
            >
              <div className="text-xl my-2 font-rubik max-sm:text-xl">
                Internship Experience(PFE)
              </div>
              <p className="font-poppins text-base w-full text-muted-foreground  max-sm:text-xs">
                During my internship at Cosumar, I developed Cosumar-Shop using HTML, CSS, JavaScript, PHP, and MySQL. The project featured:
                Add, update, and delete products in the panel
                View product details and total prices
                Responsive design for a seamless experience across devices
                This project enhanced my full-stack development skills by focusing on creating a functional and user-friendly management system.

              </p>
            </FramerWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
