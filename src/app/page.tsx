'use client'
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [css, setCss] = useState('opacity-0');
  const [randNumber, setRandNumber] = useState(0);
  const picture = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
  const randNum = () => {
    return Math.floor(Math.random() * 5);
  }
  const handleClick = () => {
    console.log(randNumber);

    if (css === 'opacity-0') {
      setRandNumber(randNum());
      setCss('opacity-1');
    } else {
      setCss('opacity-0');
    }
  }

  return (
    <div className=' text-center'>
      <h1 className='text-2xl'>practice-web-up</h1>
      <button onClick={handleClick} className=' my-3 border border-blue-500 rounded bg-pink-200 p-1 hover:opacity-80 duration-300'>
        {
          (css === 'opacity-0') ? 'Appear Picture' : 'Disappear Picture'

        }
      </button>
      <div className={` relative w-2/3 mx-auto my-5  duration-1000 ${css}`}>
        <p className=' bg-[rgba(255,255,255,.6)] p-1 rounded absolute top-2 left-2' >{randNumber}</p>
        <img className=' shadow-lg shadow-gray-500 rounded-lg' src={`./img/${picture[randNumber]}`} alt="" />
      </div>
    </div>
  )
}
