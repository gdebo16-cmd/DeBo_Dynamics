import {  useContext  } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import AdaptButton from  './lotties/AdaptorButton'


interface ThemeToggleProps {
    className?: string;
}

const ThemeToggle = ({className}: ThemeToggleProps) => {
    const context = useContext(ThemeContext)
        if (!context) 
            throw new Error('ThemeToggle must be used within a ThemeProvider')
   
    const { toggleTheme } = context;
    // const currentIndex = availableThemes.indexOf(theme);
    // const nextIndex = (currentIndex + 1) % availableThemes.length;
    // const nextTheme = availableThemes[nextIndex];

    return (
            <AdaptButton className={className} onToggle={toggleTheme}/>
    );
}



export default ThemeToggle


