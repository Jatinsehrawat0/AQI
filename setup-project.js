const fs = require('fs');
const path = require('path');

// Project structure and files
const projectStructure = {
  'package.json': `{
  "name": "aqi-website",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}`,
  
  'index.html': `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Air Quality Index (AQI) Website</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`,

  'README.md': `# Air Quality Index (AQI) Website

A beautiful, responsive web application for monitoring real-time air quality data.

## Features

- Real-time AQI display with color-coded status indicators
- Multiple pollutant tracking (PM2.5, PM10, O3, NO2, SO2, CO)
- Location search functionality
- Health recommendations based on current AQI levels
- Interactive charts showing pollution trends
- Responsive design for all devices

## Getting Started

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

3. Open your browser and navigate to \`http://localhost:5173\`

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)

## Live Demo

Visit: https://genuine-rugelach-279ef7.netlify.app
`
};

// Create directories
const directories = [
  'src',
  'src/components',
  'src/data',
  'src/types',
  'src/utils'
];

console.log('Creating Air Quality Index (AQI) Website project...');

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(\`Created directory: \${dir}\`);
  }
});

// Create files
Object.entries(projectStructure).forEach(([filename, content]) => {
  fs.writeFileSync(filename, content);
  console.log(\`Created file: \${filename}\`);
});

console.log('\\n✅ Project structure created successfully!');
console.log('\\nNext steps:');
console.log('1. Run: npm install');
console.log('2. Run: npm run dev');
console.log('3. Open http://localhost:5173 in your browser');
console.log('\\n📁 You can now copy the remaining source files from the project structure.');
    )
  }
}
)