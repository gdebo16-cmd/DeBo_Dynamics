import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import './style.css'
import Home from './components/Home'
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume'; 

const App = () => {

  return (
    <ThemeProvider>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App