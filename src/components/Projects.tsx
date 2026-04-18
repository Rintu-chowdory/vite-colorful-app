import React from 'react'
type Status = 'live' | 'wip' | 'paused'
interface Project { name: string; desc: string; status: Status; progress: number; tech: string[]; github: string; demo?: string; banner: string; bg: string }
const projects: Project[] = [
  { name: 'Aura AI',       desc: 'AI chat powered by Groq API with streaming responses and glassmorphism UI.',       status: 'live',   progress: 90,  tech: ['React','Vite','Groq API','TypeScript'],        github: 'https://github.com/rintuchowdory/my-app', demo: '#', banner: '🤖', bg: 'linear-gradient(135deg,#0d2855,#1a1060)' },
  { name: 'openclow',      desc: 'Next.js chatbot integrating HuggingFace, OpenAI & Ollama with multi-model support.', status: 'wip',  progress: 65,  tech: ['Next.js','TypeScript','HuggingFace','Railway'],  github: 'https://github.com/rintuchowdory/openclow', banner: '🌐', bg: 'linear-gradient(135deg,#1e0d45,#0d1a40)' },
  { name: 'WhatsFlow',     desc: 'WhatsApp monitoring dashboard with FastAPI backend, SQLite and real-time stats.',   status: 'live',   progress: 80,  tech: ['FastAPI','Python','SQLite','React'],            github: '#', demo: '#', banner: '💬', bg: 'linear-gradient(135deg,#0c2a1a,#0a1f10)' },
  { name: 'CRM Dashboard', desc: 'Dark CRM with Recharts charts, stat cards, sparklines and embedded AI chat widget.', status: 'live', progress: 95,  tech: ['React','Recharts','TypeScript'],               github: '#', demo: '#', banner: '📊', bg: 'linear-gradient(135deg,#1c1408,#2e1505)' },
  { name: 'Athan App',     desc: 'Islamic prayer times app using Geolocation API with offline caching & animations.', status: 'live',  progress: 100, tech: ['Vite','Vanilla JS','CSS'],                    github: '#', demo: '#', banner: '🕌', bg: 'linear-gradient(135deg,#0a1628,#101a35)' },
  { name: 'Habit Tracker', desc: 'Fullstack habit tracker with Python backend, streak visualization and reminders.',   status: 'paused',progress: 40,  tech: ['React','Python','FastAPI','SQLite'],           github: '#', banner: '✅', bg: 'linear-gradient(135deg,#1a0e16,#110a14)' },
]
const statusCfg = {
  live:   { label: '● Live',   cls: 'status-live'   },
  wip:    { label: '◐ In Dev', cls: 'status-wip'    },
  paused: { label: '◯ Paused', cls: 'status-paused' },
}

export default function Projects() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Projects</h1>
        <p className="page-sub">{projects.filter(p=>p.status==='live').length} live · {projects.filter(p=>p.status==='wip').length} in development</p>
      </div>
      <div className="projects-grid">
        {projects.map(p => {
          const s = statusCfg[p.status]
          return (
            <div className="project-card" key={p.name}>
              <div className="project-banner" style={{ background: p.bg }}>
                <span style={{ fontSize: '2.2rem', position: 'relative', zIndex: 1 }}>{p.banner}</span>
                <span className={`status-dot ${s.cls}`} style={{ position:'absolute', top:10, right:10, zIndex:2 }}>{s.label}</span>
              </div>
              <div className="project-header">
                <span className="project-name">{p.name}</span>
              </div>
              <p className="project-desc">{p.desc}</p>
              <div>
                <div style={{display:'flex',justifyContent:'space-between',fontSize:11,color:'#485278',marginBottom:5}}>
                  <span>Progress</span><span style={{fontFamily:'JetBrains Mono,monospace'}}>{p.progress}%</span>
                </div>
                <div className="progress-bar"><div className="progress-fill" style={{width:`${p.progress}%`}} /></div>
              </div>
              <div className="tech-chips">
                {p.tech.map(t => <span key={t} className="chip" style={{fontSize:11}}>{t}</span>)}
              </div>
              <div className="project-links">
                <a className="proj-link" href={p.github} target="_blank" rel="noreferrer">🐙 GitHub</a>
                {p.demo && <a className="proj-link" href={p.demo}>↗ Demo</a>}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
