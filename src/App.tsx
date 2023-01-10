import React, { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import Overlay from './components/Overlay'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false)
  const [cartCount, setCartCount] = useState<number>(0)

  return (
    <>
      <Toaster />
      <div className="bg-secondary text-base font-normal font-default w-full min-h-screen overflow-x-hidden text-primary relative">
        <main className="max-w-7xl mx-auto px-6 h-screen overflow-hidden">
          <Header setShowSidebar={setShowSidebar} cartCount={cartCount} />
          <Main cartCount={cartCount} setCartCount={setCartCount} />
        </main>
        {showSidebar && <>
          <Sidebar setShowSidebar={setShowSidebar} />
          <Overlay setShowSidebar={setShowSidebar} />
        </>}
      </div>
    </>
  )
}

export default App