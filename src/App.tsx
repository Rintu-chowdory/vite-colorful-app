import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Overview from './components/Overview'
import Tasks from './components/Tasks'
import Projects from './components/Projects'

export type View = 'overview' | 'tasks' | 'projects'

export default function App() {
  const [view, setView] = useState<View>('overview')
  const [taskCount, setTaskCount] = useState(4)
  return (
    <div className="shell">
      <Sidebar active={view} onNav={setView} taskCount={taskCount} />
      <main className="main">
        {view === 'overview' && <Overview />}
        {view === 'tasks'    && <Tasks onCountChange={setTaskCount} />}
        {view === 'projects' && <Projects />}
      </main>
    </div>
  )
}
