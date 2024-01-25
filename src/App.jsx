import React, { useState } from 'react'


function App() {
  const [color, setcolor] = useState("olive")
  console.log(color)
  return (
    <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-40 inset-x-0 px-2 '
        style={{backgroundColor: "white"}}> 
          <div className='fixed flex flex-wrap justify-center rounded-3xl gap-x-3 px-2 py-3 shadow-lg bg-white'>
          <button className='rounded-full px-3 py-2 shadow-xl text-white'
          style={{backgroundColor: "red"}}
          onClick={() => setcolor("red")}>
            Red
          </button>
          <button className='rounded-full px-3 py-2 shadow-xl text-white'
          style={{backgroundColor: "Green"}}
          onClick={() => setcolor("Green")}>
            Green
          </button>
          <button className='rounded-full px-3 py-2 shadow-xl text-black'
          style={{backgroundColor: "Yellow"}}
          onClick={() => setcolor("Yellow")}>
            Yellow
          </button>
          <button className='rounded-full px-3 py-2 shadow-xl text-white'
          style={{backgroundColor: "Orange"}}
          onClick={() => setcolor("Orange")}>
            Orange
          </button>
          <button className='rounded-full px-3 py-2 shadow-xl text-white'
          style={{backgroundColor: "Blue"}}
          onClick={() => setcolor("Blue")}>
            Blue
          </button>
          <button className='rounded-full px-3 py-2 shadow-xl text-white'
          style={{backgroundColor: "Teal"}}
          onClick={() => setcolor("Teal")}>
            Teal
          </button>
          <button className='rounded-full px-3 py-2 shadow-xl text-white'
          style={{backgroundColor: "#ff0054"}}
          onClick={() => setcolor("#ff0054")}>
            Pink
          </button>
          <button className='rounded-full px-3 py-2 shadow-xl text-white'
          style={{backgroundColor: "#788585"}}
          onClick={() => setcolor("#788585")}>
            Grey
          </button>
          <button className='rounded-full px-3 py-2 shadow-xl text-white'
          style={{backgroundColor: "#e06d06"}}
          onClick={() => setcolor("#e06d06")}>
            Choco Brown
          </button>
          </div>
        </div>
    </div>
  )
}

export default App
