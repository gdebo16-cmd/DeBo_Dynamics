import FighterImg from '../assets/Fighter.png';
import CyberImg from '../assets/Cyber.png';
import ProjectsImg from '../assets/Projects.png';
import Nav from './nav';
import LottieBackground from './lottie';

const Content = () => {

    const content_tile = [
        { title: "Portfolio", description: "Showcase of our work", image: FighterImg },
        { title: "Mission", description: "Our mission and values", image: CyberImg },
        { title: "Vision", description: "Our vision for the future", image: ProjectsImg },
    ];
  return (
    <div className="content-container">
        <LottieBackground style={{ height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
        <Nav />
        <div className="adapt-button-container">
        </div>
        <section className="site-body">
          <ul className="tile-list">
            {content_tile.map((tile) => (
              <button className="tile-button" key={tile.title}>
                <img className="tile-image" src={tile.image} alt={tile.title}></img>
                <h2 className="tile-title">{tile.title}</h2>
              </button>
            ))}
          </ul>
        </section>
    </div>
  )
}

export default Content