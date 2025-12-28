# Vite Colorful App

Quick starter: Vite + React + TypeScript, Dockerized and served with nginx.

Run locally (dev):

```bash
cd vite-colorful-app
npm install
npm run dev -- --host
```

Build and run with Docker:

```bash
cd vite-colorful-app
docker compose up --build -d
```

The service listens on port 80. To expose it publicly, ensure your host firewall/router forwards port 80 and your machine is reachable from the internet. Alternatively use a tunnelling service like `ngrok`.

To push to GitHub:

```bash
cd vite-colorful-app
git init
git add .
git commit -m "Initial Vite colorful app"
gh repo create <your-username>/<repo-name> --public --source=. --remote=origin
git push -u origin main
```
