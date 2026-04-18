import React, { useEffect, useState } from 'react'

function useCounter(target: number, duration = 1200, delay = 300) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    const timer = setTimeout(() => {
      const steps = 40
      const inc = target / steps
      let current = 0
      const interval = setInterval(() => {
        current += inc
        if (current >= target) { setVal(target); clearInterval(interval) }
        else setVal(Math.floor(current))
      }, duration / steps)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timer)
  }, [target, duration, delay])
  return val
}

const statsRaw = [
  { label: 'Projects',    value: 12,  suffix: '',  delta: '+2 this month',   up: true },
  { label: 'Tasks Done',  value: 84,  suffix: '',  delta: '+11 this week',   up: true },
  { label: 'Deploy Rate', value: 97,  suffix: '%', delta: 'uptime stable',   up: true },
  { label: 'Open PRs',    value: 3,   suffix: '',  delta: '−1 from last wk', up: true },
  { label: 'Commits',     value: 241, suffix: '',  delta: '+18 this month',  up: true },
]

function StatCard({ label, value, suffix, delta, up }: typeof statsRaw[0]) {
  const count = useCounter(value, 1400, 400)
  return (
    <div className="stat-card">
      <div className="stat-label">{label}</div>
      <div className="stat-value">{count}{suffix}</div>
      <div className={`stat-delta ${up ? 'delta-up' : 'delta-down'}`}>{up ? '↑' : '↓'} {delta}</div>
    </div>
  )
}

const activity = [
  { dot: 'dot-green',  text: <><strong>Deployed</strong> Aura AI to Cloudflare Pages</>,    time: '2 min ago'  },
  { dot: 'dot-blue',   text: <><strong>Merged PR #14</strong> — Dashboard redesign</>,       time: '41 min ago' },
  { dot: 'dot-amber',  text: <><strong>Build failed</strong> openclow — fixed API route</>,  time: '2 hr ago'   },
  { dot: 'dot-purple', text: <><strong>Created repo</strong> vite-colorful-app</>,           time: '5 hr ago'   },
  { dot: 'dot-green',  text: <><strong>Railway deploy</strong> WhatsFlow — success</>,       time: 'Yesterday'  },
  { dot: 'dot-blue',   text: <><strong>Added</strong> Groq streaming to Aura AI</>,          time: '2 days ago' },
]
const quickLinks = [
  { icon: '🐙', label: 'GitHub Profile',    sub: 'rintuchowdory' },
  { icon: '🚀', label: 'Cloudflare Pages',  sub: 'my-app / aura-ai' },
  { icon: '🚂', label: 'Railway Dashboard', sub: 'whatsflow backend' },
  { icon: '📦', label: 'NPM Packages',      sub: '3 published' },
]
const techStack = [
  { label: 'React', color: '' }, { label: 'TypeScript', color: '' },
  { label: 'Python', color: 'amber' }, { label: 'FastAPI', color: 'green' },
  { label: 'Vite', color: 'purple' }, { label: 'Next.js', color: '' },
  { label: 'SQLite', color: 'green' }, { label: 'Docker', color: '' },
  { label: 'Groq API', color: 'purple' }, { label: 'Node.js', color: 'green' },
]

export default function Overview() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Good day, Rintu 👋</h1>
        <p className="page-sub">Here's what's happening across your projects.</p>
      </div>
      <div className="stats-grid">
        {statsRaw.map(s => <StatCard key={s.label} {...s} />)}
      </div>
      <div className="two-col">
        <div>
          <div className="section-heading">
            <span className="section-title">Recent Activity</span>
            <span className="section-action">View all →</span>
          </div>
          <div className="activity-feed">
            {activity.map((a, i) => (
              <div className="activity-item" key={i} style={{ animationDelay: `${i * 0.06}s` }}>
                <span className={`activity-dot ${a.dot}`} />
                <div>
                  <div className="activity-text">{a.text}</div>
                  <div className="activity-time">{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="section-heading">
            <span className="section-title">Quick Links</span>
          </div>
          <div className="quick-panel">
            {quickLinks.map((q, i) => (
              <div className="quick-link" key={i}>
                <span className="quick-link-icon">{q.icon}</span>
                <div>
                  <div className="quick-link-text">{q.label}</div>
                  <div className="quick-link-sub">{q.sub}</div>
                </div>
                <span className="quick-link-arrow">↗</span>
              </div>
            ))}
          </div>
          <div className="tech-bar">
            <div className="section-title">Tech Stack</div>
            <div className="tech-chips">
              {techStack.map((t, i) => (
                <span key={t.label} className={`chip ${t.color}`} style={{ animationDelay: `${i * 0.04}s` }}>{t.label}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
