import Background from '../src/Images/535d17f12fd5cfa95b3392433d51675fcef74d1bd92662c5c89d371dc5b4161c.jpg'
import React from 'react'

function Home() {
    return (
      <div 
      style={{backgroundImage: `url(${Background})`, backgroundPosition: 'top',zIndex: '-1', backgroundSize: 'cover', width: '100vw', height: '100vh',}}
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
        <div className='flex place-items-center h-screen'>
          <h3 className='p-5 rounded text-black'>Pimp My Ride</h3>
        </div>
      </div>
    )
  }

export default Home
