import FighterImg from '../assets/Fighter.png';
import CyberImg from '../assets/Cyber.png';
import ProjectsImg from '../assets/Projects.png';

interface BodyProps {
    className?: string;
}
const Body = ({className}: BodyProps) => {
    const content_tile = [
        { title: "Portfolio", description: "Showcase of our work", image: FighterImg },
        { title: "Experience", description: "Our mission and values", image: CyberImg },
        { title: "Vision", description: "Our vision for the future", image: ProjectsImg },
    ];

    return (
        <section className={className}>
            <h1 className="content-title">Welcome to DeBo Dynamics</h1>
            <ul className="tile-list">
            {content_tile.map((tile) => (
                <button className="tile-button" key={tile.title}>
                    <img className="tile-image" src={tile.image} alt={tile.title}></img>
                    <h2 className="tile-title">{tile.title}</h2>
                </button>
            ))}
            </ul>
        </section>
    )
}

export default Body