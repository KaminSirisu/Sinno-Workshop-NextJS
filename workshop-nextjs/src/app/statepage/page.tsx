"use client";
import React, { useCallback } from 'react';
import { useState } from 'react';

export default function page() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount((prev) => prev + 1);
    };
  return (
    <div className='flex flex-row justify-center mt-10'>
        <h1 className='text-2xl'>Click: {count}</h1>
        <button className='bg-blue-400 p-5 rounded-lg w-24' onClick={handleClick}>Click Me!</button>
    </div>
  )
}
