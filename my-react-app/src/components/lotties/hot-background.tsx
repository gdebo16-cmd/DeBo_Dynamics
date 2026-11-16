import { Lottie } from "lottie-react";
import animationData from "../../animations/hot-background.json";

type LottieComponentProps = {
  className?: string;
};

const HotBackground = ({ className }: LottieComponentProps) => {
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

export default HotBackground;
