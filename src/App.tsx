import React, { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import Overlay from './components/Overlay'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false)

  return (
    <div className="bg-secondary text-base font-normal font-default w-full min-h-screen overflow-x-hidden text-primary relative">
      <main className="max-w-7xl mx-auto px-6 h-screen overflow-hidden">
        <Header setShowSidebar={setShowSidebar} />
        <Main />
      </main>
      {showSidebar && <>
        <Sidebar setShowSidebar={setShowSidebar} />
        <Overlay setShowSidebar={setShowSidebar} />
      </>}
      <Toaster />
    </div>
  )
}

export default App