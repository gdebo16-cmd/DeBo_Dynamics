import Nav from '../components/nav';
import Banner from '../components/banner';
import Footer from '../components/footer';
import BgToggle from '../components/BgToggle';
import ThemeToggle from '../components/ThemeButton';
import './vision.css';

interface VisionProps {
  className?: string;
}

const Vision = ({ className }: VisionProps) => {
  return (
    <main className={className}>
      <BgToggle className="Lottie-bg" />
      <Banner className="banner" />
      <section className="vision-page">
        <h1 className="vision-headline">Hired!</h1>
      </section>
      <ThemeToggle className="adapt-item" />
      <Nav className="nav" />
      <Footer className="footer" />
    </main>
  );
};

export default Vision;
