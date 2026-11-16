import { Lottie } from "lottie-react";
import animationData from "../../animations/green-background.json";

type LottieComponentProps = {
  className?: string;
};

const GreenBackground = ({ className }: LottieComponentProps) => {
  return (
    <Lottie
      src={animationData}
      className={className}
      // "slice" = like CSS background-size: cover (fill the box, crop overflow).
      // "meet" would be like contain (fit inside, leave empty bands).
      rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
      loop
      autoplay
      speed={0.25}
    />
  );
};

export default GreenBackground;
