import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import FramerWrapper from "./FramerWrapper";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";

interface projectcardprops {
  value: any;
  num: number;
}

const ProjectCards: React.FC<projectcardprops> = ({ value, num }) => {
  return (
    <FramerWrapper
      className="max-w-[32%] min-h-[380px] max-lg:max-w-full"
      y={0}
      scale={0.85}
      delay={num / 4}
      duration={0.15}
    >
      <Card className="w-full h-full flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-200">
        <CardHeader className="pb-2">
          <CardTitle>
          <Badge className="py-2 px-3">{value.title}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <Image src={value.url} alt={value.title} width={400} height={250} className="object-cover rounded-md" />
          <div className="flex flex-wrap justify-center gap-2">
            {value.tags.map((itm: string, indx: number) => (
              <Tag key={indx} tag={itm} />
            ))}
          </div>
        </CardContent>
        <CardFooter className="mt-4 flex justify-center">
          <Link
            href={value.link}
            target="_blank"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "flex items-center gap-2"
            )}
          >
            Visit Project <ArrowUpRight className="h-5 w-5" />
          </Link>
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
};
const Tag: React.FC<{ tag: string }> = ({ tag }) => {
  const getTagStyles = (tag: string) => {
    switch (tag) {
      case "Nextjs":
        return "bg-teal-100 text-teal-800";
      case "Paypal":
        return "bg-yellow-100 text-yellow-800";
      case "Shadcn Ui":
        return "bg-blue-100 text-blue-800";
      case "Typescript":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return (
    <span
      className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${getTagStyles(
        tag
      )}`}
    >
      {tag}
    </span>
  );
};

export default ProjectCards;
