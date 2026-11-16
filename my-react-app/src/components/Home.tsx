
import Nav from './nav';
import Banner from './banner';
import Footer from './footer';
import BgToggle from './BgToggle';
import Body from './body';
import ThemeToggle from './ThemeButton';




const Home = () => {
  return (
      <main className="content-container">
          <BgToggle className="Lottie-bg" />
          <Banner className="banner" />
          <Body className="content-tiles" />
          <ThemeToggle className='adapt-item'/>
          <Nav className="nav" />
          <Footer className="footer" />
      </main>
  )
}

export default Home