import { Lottie } from "lottie-react";
import animationData from "../../animations/ocean-background.json";

type LottieComponentProps = {
  className?: string;
};

const OceanBackground = ({ className }: LottieComponentProps) => {
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

export default OceanBackground;
