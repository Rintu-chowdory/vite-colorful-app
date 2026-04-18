import React, { useState } from 'react'
type Priority = 'high' | 'medium' | 'low'
type Filter = 'all' | 'active' | 'done'
interface Task { id: number; text: string; priority: Priority; done: boolean }
const initTasks: Task[] = [
  { id: 1, text: 'Set up CI/CD pipeline for openclow',          priority: 'high',   done: false },
  { id: 2, text: 'Add Groq streaming to Aura AI',               priority: 'high',   done: true  },
  { id: 3, text: 'Write unit tests for WhatsFlow API',           priority: 'medium', done: false },
  { id: 4, text: 'Update README for all GitHub repos',           priority: 'low',    done: false },
  { id: 5, text: 'Migrate Netlify project to Cloudflare Pages',  priority: 'medium', done: true  },
  { id: 6, text: 'Add dark mode toggle to CRM dashboard',        priority: 'low',    done: false },
]
const pClass = { high: 'p-high', medium: 'p-medium', low: 'p-low' }

export default function Tasks({ onCountChange }: { onCountChange?: (n: number) => void }) {
  const [tasks, setTasks]       = useState<Task[]>(initTasks)
  const [input, setInput]       = useState('')
  const [priority, setPriority] = useState<Priority>('medium')
  const [filter, setFilter]     = useState<Filter>('all')

  const update = (next: Task[]) => { setTasks(next); onCountChange?.(next.filter(t => !t.done).length) }
  const add    = () => { const t = input.trim(); if (!t) return; update([...tasks, { id: Date.now(), text: t, priority, done: false }]); setInput('') }
  const toggle = (id: number) => update(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t))
  const del    = (id: number) => update(tasks.filter(t => t.id !== id))
  const visible = tasks.filter(t => filter === 'all' ? true : filter === 'active' ? !t.done : t.done)

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Task Manager</h1>
        <p className="page-sub">{tasks.filter(t=>!t.done).length} active · {tasks.filter(t=>t.done).length} completed</p>
      </div>
      <div className="tasks-toolbar">
        <input className="input-field" placeholder="Add a new task..." value={input}
          onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && add()} />
        <select className="select-field" value={priority} onChange={e => setPriority(e.target.value as Priority)}>
          <option value="high">🔴 High</option>
          <option value="medium">🟡 Medium</option>
          <option value="low">🟢 Low</option>
        </select>
        <button className="btn-primary" onClick={add}>+ Add Task</button>
      </div>
      <div className="filter-tabs">
        {(['all','active','done'] as Filter[]).map(f => (
          <button key={f} className={`filter-tab ${filter===f?'active':''}`} onClick={() => setFilter(f)}>
            {f.charAt(0).toUpperCase()+f.slice(1)} ({f==='all'?tasks.length:f==='active'?tasks.filter(t=>!t.done).length:tasks.filter(t=>t.done).length})
          </button>
        ))}
      </div>
      <div className="task-list">
        {visible.length === 0 && <div className="empty-state"><div className="empty-icon">✓</div><div className="empty-text">Nothing here!</div></div>}
        {visible.map(task => (
          <div key={task.id} className={`task-item ${task.done?'done':''}`}>
            <div className={`task-check ${task.done?'checked':''}`} onClick={() => toggle(task.id)} />
            <span className="task-text">{task.text}</span>
            <span className={`priority-badge ${pClass[task.priority]}`}>{task.priority}</span>
            <button className="task-del" onClick={() => del(task.id)}>✕</button>
          </div>
        ))}
      </div>
    </>
  )
}
