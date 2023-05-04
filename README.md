how to make it work:

npm create vite@latest twquery -- --template react
cd twquery

npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i vite-plugin-svgr
npm i @tanstack/react-query @tanstack/react-query-devtools axios
npm install -D @faker-js/faker
npm install @heroicons/react
npm i react-intersection-observer
npm install -g json-server
npm install react react-dom
npm install react-query
npm i react-router-dom
npm i daisyui
json-server --watch EOQLB9.json

tailwind.config.js:
...
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
...

main.css:
@tailwind base;
@tailwind components;
@tailwind utilities;


vite.config.js:
import svgr from 'vite-plugin-svgr'
...
plugins: [react(), svgr()],
...