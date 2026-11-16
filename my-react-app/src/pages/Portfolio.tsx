import { PROJECTS } from '../data/projects';
import PortfolioCard from '../components/PortfolioCard.tsx';
import Nav from '../components/nav';
import Banner from '../components/banner';
import Footer from '../components/footer';
import BgToggle from '../components/BgToggle';
import ThemeToggle from '../components/ThemeButton';


interface PortfolioProps {
  className?: string;
}

const Portfolio = ({ className }: PortfolioProps) => {

  return (
    <main className={className}>
      <BgToggle className="Lottie-bg" />
      <Banner className="banner" />
      <section className="portfolio-grid">
        {PROJECTS.map((project) => (
          <PortfolioCard key={project.name} className={`${project.name}-tile`} project={project} />
        ))}
      </section>
      <ThemeToggle className='adapt-item'/>
      <Nav className="nav" />
      <Footer className="footer" />
    </main>
  );
};

export default Portfolio;