
interface FooterProps {
    className?: string;
}


const Footer = ({className}: FooterProps) => {
  return (
    <footer className={className}>
        <p className="footer-text">© 2024 DeBo Dynamics. All rights reserved.</p>
    </footer>
  )
}

export default Footer