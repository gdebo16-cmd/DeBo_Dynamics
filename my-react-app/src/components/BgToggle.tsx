import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Lottie } from 'lottie-react'

//background imports
import LightBackground from '../animations/light-background.json'
import ForestBackground from '../animations/green-background.json'
import OceanBackground from '../animations/ocean-background.json'
import HotBackground from '../animations/hot-background.json'
import DarkBackground from '../animations/dark-background.json'




const BACKGROUND = {
    Light: LightBackground,
    Forest: ForestBackground,
    Ocean: OceanBackground,
    Hot: HotBackground,
    Dark: DarkBackground,
};

interface BgToggleProps {
    className?: string;
}


const BgToggle = ({ className }: BgToggleProps) => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('BgToggle must be used within a ThemeProvider');
    }

    const Background = BACKGROUND[context.theme] ?? DarkBackground;

 return (
    <Lottie
      src={Background}
      className={className}
      rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
      loop
      autoplay
      speed={0.5}
      />
  );
}

export default BgToggle;