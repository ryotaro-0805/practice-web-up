'use client'
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [css, setCss] = useState('opacity-0');
  const handleClick = () => {
    setCss('opacity-1');
  }

  return (
    <div className=' text-center'>
      <h1 className='text-2xl'>practice-web-up</h1>
      <button onClick={handleClick} className=' my-3 border border-blue-500 rounded bg-pink-200 p-1'>Please PUSH</button>
      <div className={`bg-purple-400 w-1/2 mx-auto my-5  duration-1000 ${css}`}>
        <img src="./img/DSCF0059.JPG" alt="" />
      </div>
    </div>
  )
}
