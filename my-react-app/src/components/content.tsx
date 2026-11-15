import FighterImg from '../assets/Fighter.png';
import CyberImg from '../assets/Cyber.png';
import ProjectsImg from '../assets/Projects.png';
import Nav from './nav';

const Content = () => {

    const content_tile = [
        { title: "Portfolio", description: "Showcase of our work", image: FighterImg },
        { title: "Mission", description: "Our mission and values", image: CyberImg },
        { title: "Vision", description: "Our vision for the future", image: ProjectsImg },
    ];
  return (
    <div className="content-container">
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