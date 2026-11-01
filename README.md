# Simple Node.js Web Application

A beginner-friendly web application built with Node.js and Express. It serves a static HTML/CSS/JavaScript page and includes a small JSON API endpoint.

## Requirements
- Node.js (LTS recommended)
- npm

## Run locally

1. Extract the project ZIP.
2. Open a terminal in the project folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Open http://localhost:3000 in your browser.

For automatic server restarts during development, use:

```bash
npm run dev
```

## Project structure

```text
simple-nodejs-web-app/
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── package.json
├── server.js
└── README.md
```

## API

- `GET /api/hello` — returns a JSON greeting from the Express server.


