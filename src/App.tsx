import React from 'react'

export default function App() {
  return (
    <div className="app-root">
      <header className="card">
        <h1 className="title">Colorful Vite App</h1>
        <p className="subtitle">A bright, responsive starter built with Vite + React</p>
        <div className="controls">
          <a className="btn" href="#" onClick={e => e.preventDefault()}>Get Started</a>
          <a className="btn ghost" href="#" onClick={e => e.preventDefault()}>Docs</a>
        </div>
      </header>
      <section className="grid">
        <div className="tile">Fast</div>
        <div className="tile">Tiny</div>
        <div className="tile">Responsive</div>
        <div className="tile">Accessible</div>
      </section>
      <footer className="footer">Made with ❤️ — Deploy anywhere</footer>
    </div>
  )
}
