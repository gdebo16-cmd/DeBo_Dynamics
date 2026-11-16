export interface Project {
  name: string;
  description: string;
  tech: string[];
  repo?: string;   
  live?: string;    
  image?: string;
}

export const PROJECTS: Project[] = [
    {
    name: 'Project-Umber',
    description: 'A Virtual Tabletop program that tracks scores, roll math, and projects data to all players.',
    tech: ['React', 'Node', 'Express', 'JavaScript', 'CSS'],
    repo: 'https://github.com/gdebo16-cmd/Project-Umber.git',
    live: 'https://eldridtales.com',
    },
    {
    name: 'Lumen',
    description: 'A private AI chat assistant that runs on local models and remembers useful facts about each user between chats. "Auto" picks the right model for every message, and hard questions can go to big cloud models under a monthly spending limit.',
    tech: ['Next.js', 'React', 'TypeScript', 'Ollama', 'SQLite', 'CSS'],
    repo: 'https://github.com/gdebo16-cmd/Illumination-Intelligence.git',
    },
    {
    name: 'Umbra',
    description: 'Build your own AI agents ("Flickers"), each with a personality and a chosen set of tools: web search, reading pages, making images, memory, and code editing in a sandbox. They can work in teams, run scheduled tasks, and show every step live as they work.',
    tech: ['Next.js', 'React', 'TypeScript', 'Ollama', 'SearXNG', 'Docker', 'SQLite'],
    repo: 'https://github.com/gdebo16-cmd/Illumination-Intelligence.git',
    },
    {
    name: 'Prism',
    description: 'An AI image and video studio. Make pictures from words, edit existing pictures, turn pictures into short videos, and upscale them, using models that run on the PC\'s own graphics card, with optional cloud models for higher quality.',
    tech: ['Next.js', 'React', 'TypeScript', 'ComfyUI', 'FLUX', 'SQLite'],
    repo: 'https://github.com/gdebo16-cmd/Illumination-Intelligence.git',
    },
    {
    name: 'Astra',
    description: 'A font maker. Draw each character by hand, upload a photo of a hand-drawn alphabet sheet to trace it automatically, or describe a style and have AI draw the characters. Then download a working .ttf font.',
    tech: ['Next.js', 'React', 'TypeScript', 'Canvas', 'ComfyUI', 'SQLite'],
    repo: 'https://github.com/gdebo16-cmd/Illumination-Intelligence.git',
    },
    {
    name: 'Refract',
    description: 'A virtual playground: a sandboxed virtual machine you control from the browser, with its live screen, a terminal, and power controls. AI agents can copy code projects into it and safely edit and run them there, without touching the host PC.',
    tech: ['Next.js', 'TypeScript', 'VirtualBox', 'WebSockets', 'xterm.js', 'SSH'],
    repo: 'https://github.com/gdebo16-cmd/Illumination-Intelligence.git',
    },
    {
    name: 'Aegis',
    description: 'A code health checker. It scans a code project for copied or repeated code, unused files, outdated docs and confusing names, then uses AI to write up clear suggestions for tidying things up.',
    tech: ['Next.js', 'React', 'TypeScript', 'TypeScript Compiler API', 'Ollama'],
    repo: 'https://github.com/gdebo16-cmd/Illumination-Intelligence.git',
    },
    {
    name: 'Halo',
    description: 'A Lottie animation maker. Pick a shape or upload an SVG, mix moves like sway, pulse and flicker, watch a live preview, and download a .json animation ready for any website or app.',
    tech: ['Next.js', 'React', 'TypeScript', 'Lottie', 'SVG'],
    repo: 'https://github.com/gdebo16-cmd/Illumination-Intelligence.git',
    },
    {
    name: 'Illumination-Intelligence',
    description: 'An extensive AI suite that Allows communications between the various AI datastreams to improve effectiveness.',
    tech: ['Local LLM', 'Local Diffusion Models', 'Cloud LLM', 'Next.js', 'Python', 'Swift', 'TypeScript', 'Docker', 'Virtual Machines', 'Lottie.Json', 'CSS', 'TaleScale'],
    repo: 'https://github.com/gdebo16-cmd/Illumination-Intelligence.git',
    },
];