import React from 'react'
import { View } from '../App'

interface Props { active: View; onNav: (v: View) => void; taskCount: number }
const navItems = [
  { id: 'overview' as View, icon: '⬡', label: 'Overview' },
  { id: 'tasks'    as View, icon: '✓', label: 'Tasks' },
  { id: 'projects' as View, icon: '◈', label: 'Projects' },
]

export default function Sidebar({ active, onNav, taskCount }: Props) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-mark">⚡</div>
        <span className="logo-text">Dev<span>Hub</span></span>
      </div>
      <p className="nav-label">Menu</p>
      {navItems.map(item => (
        <div key={item.id} className={`nav-item ${active === item.id ? 'active' : ''}`} onClick={() => onNav(item.id)}>
          <span className="nav-icon">{item.icon}</span>
          {item.label}
          {item.id === 'tasks' && taskCount > 0 && <span className="nav-badge">{taskCount}</span>}
        </div>
      ))}
      <div className="sidebar-footer">
        <div className="user-chip">
          <div className="avatar">RC</div>
          <div>
            <div className="user-name">Rintu C.</div>
            <div className="user-role">Fullstack Dev</div>
          </div>
        </div>
      </div>
    </aside>
  )
}
