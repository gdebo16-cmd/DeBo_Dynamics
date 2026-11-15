import { ThemeProvider } from './context/ThemeContext'
import './style.css'
import Content from './components/content'
import LottieBackground from './components/lottie'

const App = () => {

  return (
    <ThemeProvider>
      <body>
        <main>
        <div>
        <LottieBackground  />
        </div>
        <Content />
        </main>
      </body>
    </ThemeProvider>
  )
}

export default App