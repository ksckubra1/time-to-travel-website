import Home from './pages/Home'
import PlacesToVisit from './components/PlacesToVisit'
import React from 'react'
import Communication from './components/Communication'

const App = () => {
  return (
    <div className='h-[300vh] min-w-sm overflow-x-hidden'>
      <Home />
      <PlacesToVisit />
      <Communication />
    </div>
  )
}

export default App
