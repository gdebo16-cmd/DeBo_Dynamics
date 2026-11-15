import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';


export default function DisplayComponent() {
    const context = useContext(ThemeContext)
    if (!context)
        throw new Error('DisplayComponent must be used within a ThemeProvider')

    const { theme } = context;

    return(
        <div>
            Current Theme: {theme}
        </div>
    )
}



