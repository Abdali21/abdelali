"use client";
import { cn } from "@/lib/utils";
import {AwardIcon, BriefcaseIcon, Home, MailIcon ,PencilRulerIcon, Phone, User2 } from "lucide-react";
import { buttonVariants } from "./ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { useEffect, useState } from "react";
import FramerWrapper from "./FramerWrapper";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const items = [
    { name: "Home", icon: <Home />, link: "/" },
    { name: "about", icon: <User2 />, link: "/about" },
    { name: "skills", icon: <PencilRulerIcon /> ,link: "/skills" },
    { name: "projects", icon: <BriefcaseIcon/>, link: "/projects" },
    { name: "experience", icon: <AwardIcon />, link: "/experience" },
    { name: "contact", icon: <MailIcon />, link: "/contact" },
  ];

  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <FramerWrapper
      className={`h-fit w-fit fixed top-5 right-0 left-0 px-5 
                  m-auto border border-black rounded-full  p-2 bg-transparent   
                  flex-row gap-3 transition ease-in-out delay-75 hover:-translate-y-1 
                  hover:scale-100 max-sm:gap-1 ${scrolling ? "hidden" : "flex"}`}
      y={-100}
    >
      {items.map((item) => {
        return (
          <TooltipProvider key={item.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.link}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "hover:text-[#2f7df4]",
                    pathname === item.link && "text-[#2f7df4] bg-zinc-100"
                  )}
                >
                  {item.icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </FramerWrapper>
  );
};

export default Navbar;
