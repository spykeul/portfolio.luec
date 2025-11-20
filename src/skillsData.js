import Javascriptlogo from "./imgs/Javascript_logo.webp"
import Reactlogo from "./imgs/React.js_logo.webp"
import Tailwindlogo from "./imgs/tailwind_logo.webp"

export const skillsData = [
    {
        id: 'javascript',
        name: 'JAVASCRIPT',
        image: Javascriptlogo,
        shortDescription: 'A versatile and powerful language that drives interactivity on the web. Skilled in using JavaScript for both front-end and back-end development.',
        heroDescription: 'JavaScript is the backbone of modern web development, enabling dynamic and interactive user experiences. From manipulating the DOM to building full-stack applications with Node.js, JavaScript powers everything I create. My journey with JavaScript has been transformative, taking me from basic syntax to advanced concepts like promises, async/await, and functional programming.',
        technologies: ['ES6+', 'Async/Await', 'Promises', 'DOM API', 'Fetch API', 'Node.js', 'Express', 'Event Loop', 'Closures', 'Prototypes', 'Modules', 'Arrow Functions'],
        timeline: [
            {
                phase: 'Month 1-2',
                milestone: 'JavaScript Fundamentals',
                description: 'Learned basic syntax, variables, data types, and control structures',
                difficulty: 'Understanding the difference between var, let, and const, and grasping scope',
                solution: 'Created practical examples and used the console extensively to visualize behavior'
            },
            {
                phase: 'Month 3-4',
                milestone: 'DOM Manipulation & Events',
                description: 'Built interactive web pages by manipulating the DOM and handling user events',
                difficulty: 'Event bubbling and delegation were confusing at first',
                solution: 'Built a todo list app that forced me to master event handling patterns'
            },
            {
                phase: 'Month 5-6',
                milestone: 'Asynchronous JavaScript',
                description: 'Mastered callbacks, promises, and async/await for handling asynchronous operations',
                difficulty: 'Promise chaining and error handling in async code',
                solution: 'Built a weather app that fetches data from APIs, practicing error handling'
            },
            {
                phase: 'Month 7-8',
                milestone: 'Advanced Concepts',
                description: 'Explored closures, prototypes, and functional programming patterns',
                difficulty: 'Understanding "this" keyword in different contexts',
                solution: 'Read "You Don\'t Know JS" and practiced with real-world scenarios'
            }
        ]
    },
    {
        id: 'react',
        name: 'REACT.JS',
        image: Reactlogo,
        shortDescription: 'A popular JavaScript library for building dynamic and responsive user interfaces. Experienced in creating reusable components and managing state with React.',
        heroDescription: 'React revolutionized how I build user interfaces with its component-based architecture and declarative approach. Learning React taught me to think in terms of reusable components, state management, and efficient rendering. From hooks to context API, React has become my go-to library for building modern, scalable web applications.',
        technologies: ['JSX', 'Hooks', 'useState', 'useEffect', 'useContext', 'Custom Hooks', 'React Router', 'Component Lifecycle', 'Virtual DOM', 'Props', 'State Management', 'Conditional Rendering'],
        timeline: [
            {
                phase: 'Month 1-2',
                milestone: 'React Basics',
                description: 'Learned JSX, components, props, and basic rendering',
                difficulty: 'Understanding one-way data flow and when to use props vs state',
                solution: 'Built multiple small apps focusing on component composition'
            },
            {
                phase: 'Month 3-4',
                milestone: 'Hooks & State Management',
                description: 'Mastered useState, useEffect, and other React hooks',
                difficulty: 'useEffect dependency array and preventing infinite loops',
                solution: 'Created a blog with user authentication to practice state management'
            },
            {
                phase: 'Month 5-6',
                milestone: 'Advanced Patterns',
                description: 'Implemented context API, custom hooks, and performance optimization',
                difficulty: 'Avoiding unnecessary re-renders and optimizing performance',
                solution: 'Used React DevTools profiler and implemented memoization techniques'
            },
            {
                phase: 'Month 7-8',
                milestone: 'Real-World Projects',
                description: 'Built full-featured applications with routing and complex state',
                difficulty: 'Managing complex application state across many components',
                solution: 'Learned Context API patterns and component composition strategies'
            }
        ]
    },
    {
        id: 'tailwind',
        name: 'TAILWIND CSS',
        image: Tailwindlogo,
        shortDescription: 'A utility-first CSS framework that makes styling websites faster and more efficient. Proficient in using Tailwind to create responsive, modern designs with minimal effort.',
        heroDescription: 'Tailwind CSS transformed my approach to styling by providing a utility-first framework that speeds up development without sacrificing customization. The ability to rapidly prototype and build responsive designs directly in markup has made me incredibly productive. Tailwind\'s design system thinking has also improved how I architect styles for maintainability.',
        technologies: ['Utility Classes', 'Responsive Design', 'Dark Mode', 'Custom Themes', 'JIT Compiler', 'Flexbox', 'Grid', 'Animations', 'Transitions', 'Custom Colors', 'Plugin System', 'PurgeCSS'],
        timeline: [
            {
                phase: 'Month 1-2',
                milestone: 'Utility-First Approach',
                description: 'Learned utility classes and responsive design patterns',
                difficulty: 'Unlearning traditional CSS and embracing utility classes',
                solution: 'Rebuilt existing projects with Tailwind to internalize the approach'
            },
            {
                phase: 'Month 3-4',
                milestone: 'Responsive & Custom Design',
                description: 'Mastered responsive breakpoints and theme customization',
                difficulty: 'Creating consistent spacing and sizing across breakpoints',
                solution: 'Studied the default spacing scale and created a design system'
            },
            {
                phase: 'Month 5-6',
                milestone: 'Advanced Features',
                description: 'Implemented dark mode, custom plugins, and animations',
                difficulty: 'Configuring custom themes while maintaining Tailwind benefits',
                solution: 'Read the documentation thoroughly and experimented with config options'
            },
            {
                phase: 'Month 7-8',
                milestone: 'Production Optimization',
                description: 'Optimized builds with JIT and purging unused styles',
                difficulty: 'Ensuring all styles are included while minimizing bundle size',
                solution: 'Used the JIT compiler and properly configured content paths'
            }
        ]
    }
];
