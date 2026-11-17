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
    const [theme, setTheme] = useState<Theme>('Light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        // Keep the browser's bar color in sync with the theme (read from --page-bg in style.css)
        const pageBg = getComputedStyle(document.documentElement).getPropertyValue('--page-bg').trim();
        if (pageBg) {
            document.querySelector('meta[name="theme-color"]')?.setAttribute('content', pageBg);
        }
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

