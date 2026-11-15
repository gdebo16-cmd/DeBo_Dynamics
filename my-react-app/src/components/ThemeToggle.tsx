import {  useContext  } from 'react'
import { ThemeContext } from '../context/ThemeContext'




export default function ThemeToggle() {
    const context = useContext(ThemeContext)
    if (!context) 
        throw new Error('ThemeToggle must be used within a ThemeProvider')
    
    const { theme, toggleTheme, availableThemes } = context;
    const currentIndex = availableThemes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % availableThemes.length;
    const nextTheme = availableThemes[nextIndex];

    return(
        <button className='adapt-button' 
            onClick={toggleTheme}
        >
            {nextTheme} Mode
        </button>
    )
}
