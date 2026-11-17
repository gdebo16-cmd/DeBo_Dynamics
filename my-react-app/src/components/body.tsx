import FighterImg from '../assets/Fighter.png';
import CyberImg from '../assets/Cyber.png';
import ProjectsImg from '../assets/Projects.png';
import { Link } from 'react-router-dom';

interface BodyProps {
    className?: string;
}
const Body = ({className}: BodyProps) => {
    // TODO(human): give each tile a `path` matching a route in app.tsx
    // ('/', '/resume', '/portfolio'). Portfolio is done as an example.
    const content_tile = [
        { title: "Portfolio", description: "Showcase of our work", image: FighterImg, path: "/portfolio" },
        { title: "Experience", description: "Our mission and values", image: CyberImg, path: "" },
        { title: "Vision", description: "Our vision for the future", image: ProjectsImg, path: "" },
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