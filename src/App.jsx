import React from 'react'
import WeatherCard from './components/WeatherCard'

const App = () => {
  return (
    <>
      <div className='flex items-center justify-center bg-linear-to-br from-orange-500 to-black min-h-screen w-full'>
      <WeatherCard />
      </div>
    </>
  )
}

export default App
