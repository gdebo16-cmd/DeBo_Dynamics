import { ThemeProvider } from './context/ThemeContext'
import './style.css'
import Content from './components/content'

const App = () => {

  return (
    <ThemeProvider>
      <body>
        <main>
        <Content />
        </main>
      </body>
    </ThemeProvider>
  )
}

export default App