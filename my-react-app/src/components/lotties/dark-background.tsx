import { Lottie } from "lottie-react";
import animationData from "../../animations/dark-background.json";

type LottieComponentProps = {
  className?: string;
};

const DarkBackground = ({ className }: LottieComponentProps) => {
  return (
    <Lottie
      src={animationData}
      className={className}
      rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
      loop
      autoplay
      speed={0.25}
    />
  );
};

export default DarkBackground;


      // "slice" = like CSS background-size: cover (fill the box, crop overflow).
      // "meet" would be like contain (fit inside, leave empty bands).
