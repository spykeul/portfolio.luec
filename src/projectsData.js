import CalcImg from "./imgs/calculatorimg.jpg"
import TodoImg from "./imgs/tasktrackerimg.jpg"
import WeatherImg from "./imgs/weatherimage.jpg"
import EcomImg from "./imgs/Ecomimg.jpg"

export const projectsData = [
    {
        id: 'calculator',
        name: 'Advanced Calculator',
        tagline: 'A modern, feature-rich calculator with scientific functions',
        image: CalcImg,
        images: [CalcImg, CalcImg, CalcImg], // In real app, use different screenshots
        description: 'Built a fully functional calculator application that handles basic arithmetic as well as advanced scientific calculations. The app features a clean, intuitive interface with real-time calculation display, history tracking, and keyboard support for enhanced usability. Implemented using React for state management and Tailwind CSS for responsive styling.',
        liveDemo: 'https://your-calculator-demo.com',
        github: 'https://github.com/yourusername/calculator',
        techStack: [
            { name: 'React', icon: '⚛️', description: 'Component-based UI', category: 'Frontend' },
            { name: 'JavaScript', icon: '💛', description: 'Core logic', category: 'Language' },
            { name: 'Tailwind CSS', icon: '🎨', description: 'Styling framework', category: 'Styling' },
            { name: 'Vite', icon: '⚡', description: 'Build tool', category: 'Tools' },
        ],
        features: [
            'Basic arithmetic operations (+, -, ×, ÷)',
            'Scientific functions (sin, cos, tan, log)',
            'Calculation history tracking',
            'Keyboard input support',
            'Responsive design for all devices',
            'Dark mode interface',
            'Memory functions (M+, M-, MR, MC)',
        ],
        timeline: [
            {
                phase: 'Week 1',
                milestone: 'Project Setup & Basic UI',
                features: ['Project initialization', 'Basic button grid layout', 'Display component'],
                challenge: 'Deciding on the state management approach for calculator operations',
                solution: 'Used React hooks (useState) with a single state object managing display, operation, and previous values'
            },
            {
                phase: 'Week 2',
                milestone: 'Core Calculator Logic',
                features: ['Basic operations', 'Chained calculations', 'Decimal support'],
                challenge: 'Handling operator precedence and continuous calculations',
                solution: 'Implemented a state machine pattern to track operation flow and evaluate expressions correctly'
            },
            {
                phase: 'Week 3',
                milestone: 'Advanced Features',
                features: ['Scientific functions', 'History panel', 'Keyboard events'],
                challenge: 'Implementing keyboard support without breaking button functionality',
                solution: 'Used event listeners with proper event delegation and key code mapping'
            },
            {
                phase: 'Week 4',
                milestone: 'Polish & Deployment',
                features: ['Animations', 'Error handling', 'Responsive design', 'Testing'],
                challenge: 'Ensuring consistent behavior across different screen sizes',
                solution: 'Used Tailwind responsive utilities and extensive manual testing on various devices'
            }
        ],
        learnings: [
            'Mastered React state management for complex user interactions',
            'Learned to implement keyboard event handling alongside click events',
            'Gained experience with mathematical expression parsing',
            'Improved CSS Grid skills for calculator layout',
        ]
    },
    {
        id: 'todo',
        name: 'Task Tracker Pro',
        tagline: 'Efficient task management with categories and priorities',
        image: TodoImg,
        images: [TodoImg, TodoImg, TodoImg],
        description: 'Developed a comprehensive task management application that helps users organize their daily tasks efficiently. Features include task categorization, priority levels, due dates, and local storage persistence. The app provides a clean, distraction-free interface with smooth animations and intuitive drag-and-drop functionality for task reordering.',
        liveDemo: 'https://your-todo-demo.com',
        github: 'https://github.com/yourusername/todo-app',
        techStack: [
            { name: 'React', icon: '⚛️', description: 'UI framework', category: 'Frontend' },
            { name: 'TypeScript', icon: '📘', description: 'Type safety', category: 'Language' },
            { name: 'Tailwind CSS', icon: '🎨', description: 'Styling', category: 'Styling' },
            { name: 'Local Storage', icon: '💾', description: 'Data persistence', category: 'Storage' },
            { name: 'Framer Motion', icon: '🎬', description: 'Animations', category: 'Animation' },
        ],
        features: [
            'Create, edit, and delete tasks',
            'Task categories (Work, Personal, Shopping)',
            'Priority levels (High, Medium, Low)',
            'Due date tracking with reminders',
            'Drag-and-drop task reordering',
            'Filter and search functionality',
            'Local storage persistence',
            'Dark/Light theme toggle',
            'Task completion statistics',
        ],
        timeline: [
            {
                phase: 'Week 1',
                milestone: 'Foundation & Core Features',
                features: ['Basic CRUD operations', 'Task list rendering', 'Form validation'],
                challenge: 'Managing complex task state with multiple properties',
                solution: 'Created a custom useTask hook to encapsulate task logic and state management'
            },
            {
                phase: 'Week 2',
                milestone: 'Enhanced Functionality',
                features: ['Categories', 'Priority system', 'Filtering', 'Search'],
                challenge: 'Implementing efficient filtering without performance issues',
                solution: 'Used useMemo to cache filtered results and prevent unnecessary re-renders'
            },
            {
                phase: 'Week 3',
                milestone: 'UX Improvements',
                features: ['Drag-and-drop', 'Animations', 'Theme toggle', 'Statistics'],
                challenge: 'Implementing smooth drag-and-drop while maintaining data integrity',
                solution: 'Integrated Framer Motion with careful state updates to prevent race conditions'
            },
            {
                phase: 'Week 4',
                milestone: 'Persistence & Polish',
                features: ['Local storage sync', 'Error boundaries', 'Accessibility', 'Testing'],
                challenge: 'Syncing state with local storage without causing infinite loops',
                solution: 'Used useEffect with proper dependencies and debouncing for storage updates'
            }
        ],
        learnings: [
            'Advanced React hooks patterns (custom hooks, useCallback, useMemo)',
            'LocalStorage API and data serialization techniques',
            'Implementing drag-and-drop with Framer Motion',
            'Accessibility best practices for interactive web apps',
        ]
    },
    {
        id: 'weather',
        name: 'Weather Dashboard',
        tagline: 'Real-time weather data with beautiful visualizations',
        image: WeatherImg,
        images: [WeatherImg, WeatherImg, WeatherImg],
        description: 'Created an elegant weather application that provides real-time weather information using external APIs. Features include current conditions, 7-day forecasts, hourly predictions, and weather maps. The app automatically detects user location and supports manual city search with autocomplete functionality.',
        liveDemo: 'https://your-weather-demo.com',
        github: 'https://github.com/yourusername/weather-app',
        techStack: [
            { name: 'React', icon: '⚛️', description: 'Frontend framework', category: 'Frontend' },
            { name: 'Weather API', icon: '🌤️', description: 'Data source', category: 'API' },
            { name: 'Axios', icon: '📡', description: 'HTTP client', category: 'Libraries' },
            { name: 'Chart.js', icon: '📊', description: 'Data visualization', category: 'Visualization' },
            { name: 'Tailwind CSS', icon: '🎨', description: 'Styling', category: 'Styling' },
            { name: 'Geolocation API', icon: '📍', description: 'Location services', category: 'Browser API' },
        ],
        features: [
            'Current weather conditions',
            '7-day weather forecast',
            'Hourly temperature predictions',
            'Automatic location detection',
            'City search with autocomplete',
            'Weather maps and radar',
            'Temperature unit toggle (°C/°F)',
            'Weather alerts and warnings',
            'Favorite locations',
            'Beautiful weather animations',
        ],
        timeline: [
            {
                phase: 'Week 1',
                milestone: 'API Integration',
                features: ['Weather API setup', 'Basic data fetching', 'Current weather display'],
                challenge: 'Understanding API response structure and handling rate limits',
                solution: 'Created a service layer to abstract API calls and implemented caching to reduce requests'
            },
            {
                phase: 'Week 2',
                milestone: 'Location Features',
                features: ['Geolocation', 'City search', 'Autocomplete', 'Favorites'],
                challenge: 'Handling geolocation permissions and errors gracefully',
                solution: 'Implemented fallback to IP-based location and clear user messaging for permission denials'
            },
            {
                phase: 'Week 3',
                milestone: 'Data Visualization',
                features: ['Charts for temperature trends', '7-day forecast cards', 'Hourly timeline'],
                challenge: 'Making charts responsive and readable on all devices',
                solution: 'Used Chart.js responsive options and custom breakpoints for mobile optimization'
            },
            {
                phase: 'Week 4',
                milestone: 'Polish & Features',
                features: ['Weather animations', 'Icons', 'Alerts', 'Unit conversion', 'Error handling'],
                challenge: 'Creating smooth weather-related animations without impacting performance',
                solution: 'Used CSS animations instead of JavaScript for better performance and GPU acceleration'
            }
        ],
        learnings: [
            'Working with external APIs and handling asynchronous data',
            'Browser Geolocation API and permission handling',
            'Data visualization with Chart.js',
            'Implementing search with debouncing for API efficiency',
            'Error handling and user feedback for network operations',
        ]
    },
    {
        id: 'ecommerce',
        name: 'E-Commerce Platform',
        tagline: 'Full-featured online shopping experience',
        image: EcomImg,
        images: [EcomImg, EcomImg, EcomImg],
        description: 'Built a complete e-commerce platform with product browsing, shopping cart, user authentication, and checkout flow. The application features a modern design with smooth animations, product filtering, and search functionality. Implemented responsive design ensuring seamless experience across all devices.',
        liveDemo: 'https://your-ecom-demo.com',
        github: 'https://github.com/yourusername/ecommerce',
        techStack: [
            { name: 'React', icon: '⚛️', description: 'Frontend framework', category: 'Frontend' },
            { name: 'Redux', icon: '🔄', description: 'State management', category: 'State' },
            { name: 'React Router', icon: '🛣️', description: 'Navigation', category: 'Routing' },
            { name: 'Tailwind CSS', icon: '🎨', description: 'Styling', category: 'Styling' },
            { name: 'Firebase', icon: '🔥', description: 'Backend services', category: 'Backend' },
            { name: 'Stripe', icon: '💳', description: 'Payment processing', category: 'Payments' },
        ],
        features: [
            'Product catalog with categories',
            'Advanced filtering and sorting',
            'Product search functionality',
            'Shopping cart management',
            'User authentication (sign up/login)',
            'Wishlist functionality',
            'Order history tracking',
            'Responsive design',
            'Product reviews and ratings',
            'Secure checkout process',
        ],
        timeline: [
            {
                phase: 'Week 1-2',
                milestone: 'Project Architecture',
                features: ['Project setup', 'Routing', 'Redux store', 'Product listing'],
                challenge: 'Designing a scalable state management structure for complex e-commerce data',
                solution: 'Used Redux Toolkit with normalized state shape and separate slices for products, cart, and user'
            },
            {
                phase: 'Week 3-4',
                milestone: 'Core Features',
                features: ['Cart functionality', 'Product filtering', 'Search', 'Authentication'],
                challenge: 'Keeping cart state synchronized between local storage and Redux',
                solution: 'Implemented middleware to sync Redux state with localStorage on every cart update'
            },
            {
                phase: 'Week 5-6',
                milestone: 'User Features',
                features: ['User profiles', 'Order history', 'Wishlist', 'Reviews'],
                challenge: 'Managing authentication state and protecting routes',
                solution: 'Created PrivateRoute component and auth middleware for API calls'
            },
            {
                phase: 'Week 7-8',
                milestone: 'Payment & Deployment',
                features: ['Stripe integration', 'Checkout flow', 'Order confirmation', 'Testing', 'Deployment'],
                challenge: 'Implementing secure payment processing without exposing API keys',
                solution: 'Used Firebase Cloud Functions for server-side Stripe integration'
            }
        ],
        learnings: [
            'Complex state management with Redux Toolkit',
            'Authentication and authorization patterns',
            'Payment gateway integration (Stripe API)',
            'Firebase backend services (Auth, Firestore, Functions)',
            'Building scalable component architectures',
            'Security best practices for web applications',
        ]
    }
];
