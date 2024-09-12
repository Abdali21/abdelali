import FramerWrapper from "./FramerWrapper";

const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <FramerWrapper y={0} x={-100}>
      <h1 className="text-3xl font-bold font-sans text-primary name_underline ">
        {children}
      </h1>
    </FramerWrapper>
  );
};

export default Heading;
