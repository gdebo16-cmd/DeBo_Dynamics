import FighterImg from '../assets/Fighter.png';
import CyberImg from '../assets/Cyber.png';
import ProjectsImg from '../assets/Projects.png';
import { Link } from 'react-router-dom';

interface BodyProps {
    className?: string;
}
const Body = ({className}: BodyProps) => {
    // Paths match the routes in app.tsx and the links in nav.tsx.
    const content_tile = [
        { title: "Portfolio", description: "Showcase of our work", image: FighterImg, path: "/portfolio" },
        { title: "Experience", description: "Our mission and values", image: CyberImg, path: "/resume" },
        { title: "Vision", description: "Our vision for the future", image: ProjectsImg, path: "/vision" },
    ];

    return (
        <section className={className}>
            <h1 className="content-title">Welcome to DeBo Dynamics</h1>
            <ul className="tile-list">
            {content_tile.map((tile) => (
                <Link className="tile-button" key={tile.title} to={tile.path}>
                    <img className="tile-image" src={tile.image} alt={tile.title}></img>
                    <h2 className="tile-title">{tile.title}</h2>
                </Link>
            ))}
            </ul>
        </section>
    )
}

export default Body