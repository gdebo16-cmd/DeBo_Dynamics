import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

import DarkBanner from '../assets/images/black-banner.png';
import LightBanner from '../assets/images/light-banner.png';
import ForestBanner from '../assets/images/green-banner.png';
import OceanBanner from '../assets/images/ocean-banner.png';
import HotBanner from '../assets/images/hot-banner.png';

  interface BannerProps {
      className?: string;
  }

  const IMAGE = {
    Dark: DarkBanner,
    Light: LightBanner,
    Forest: ForestBanner,
    Ocean: OceanBanner,
    Hot: HotBanner,
  };


const Banner = ({className}: BannerProps) => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('Banner must be used within a ThemeProvider');
  }

  const Image = IMAGE[context.theme] ?? DarkBanner;

  return (
    <section className={className}>
      <img className='banner-img' src={Image} alt="Logo" />
    </section>
  )
}

export default Banner