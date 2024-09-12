import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { LinkedinIcon, Mail, Phone, Pin } from "lucide-react";
 
const contactPage = () => {
  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Phone className="h-6 w-6" />
        Contact
      </Badge>
      <div className="flex flex-col gap-3 w-full">
        <Heading>Contact me📍 </Heading>
        <div className="h-auto w-full flex justify-start items-center my-3">
          <FramerWrapper y={0} scale={0.8}>
             <div className="flex items-center gap-6 mt-5 ">
                <span className="p-3 border rounded-full shadow-md"><Mail className="h-7 w-7 text-blue-500"/></span>
                <div>
                  <h3 className="font-bold text-xl">Mail</h3>
                  <h3 className="text-lg text-muted-foreground">houmaidiabdelali@gmail.com</h3>
                </div>
             </div>
             <div className="flex items-center gap-6 mt-4">
                <span className="p-3 border rounded-full shadow-md"><LinkedinIcon className="h-7 w-7 text-blue-500"/></span>
                <div>
                  <h3 className="font-bold text-xl">Linked in</h3> 
                  <p className="text-lg text-muted-foreground">
                    <a href="https://www.linkedin.com/in/abdelali-houmaidi-72b123293/">
                        Abdelali Houmaidi
                    </a>
                  </p>
                </div>
             </div>
          </FramerWrapper>
        </div>
        <p className=" font-poppins text-lg w-full text-primary max-sm:text-base"></p>
      </div>
    </div>
  );
};

export default contactPage;
