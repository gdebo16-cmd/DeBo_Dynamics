import { createContext, useState, type ReactNode, useEffect } from 'react'

type Theme = 'Light' | 'Dark' | 'Forest' | 'Ocean' | 'Hot';
const THEMES: Theme[] = ['Light', 'Dark', 'Forest', 'Ocean', 'Hot'];

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    availableThemes: Theme[];
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>('Dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
    



    const toggleTheme = () => {
        setTheme((prev) => {
            const currentIndex = THEMES.indexOf(prev);
            const nextIndex = (currentIndex + 1) % THEMES.length;
            return THEMES[nextIndex];
        });
        
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, availableThemes: THEMES }}>
            {children}
        </ThemeContext.Provider>
    );
}

