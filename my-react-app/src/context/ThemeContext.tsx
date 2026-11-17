import { createContext, useState, type ReactNode, useEffect } from 'react'

type Theme = 'Light' | 'Dark' | 'Forest' | 'Ocean' | 'Hot';
const THEMES: Theme[] = ['Light', 'Dark', 'Forest', 'Ocean', 'Hot'];

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    availableThemes: Theme[];
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


const STORAGE_KEY = 'theme';

// The script in index.html applies the saved theme before first paint;
// this reads the same value so React starts on the matching theme.
function readSavedTheme(): Theme {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && (THEMES as string[]).includes(saved)) return saved as Theme;
    } catch {
        // Storage can be blocked (private mode, strict settings); fall back to Light
    }
    return 'Light';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>(readSavedTheme);

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch {
            // Not saving is fine; the theme still works for this visit
        }
        document.documentElement.setAttribute('data-theme', theme);
        // Keep the browser's bar color in sync with the theme (read from --page-bg in style.css)
        const pageBg = getComputedStyle(document.documentElement).getPropertyValue('--page-bg').trim();
        if (pageBg) {
            document.querySelector('meta[name="theme-color"]')?.setAttribute('content', pageBg);
            // index.html set an inline color before React loaded; keep it current
            document.documentElement.style.backgroundColor = pageBg;
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

