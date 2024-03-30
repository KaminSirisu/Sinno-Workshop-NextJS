import React from 'react'
import Image from 'next/image'

export default function GridComponent() {
  return (
    <div className="gap-3 grid grid-cols-3 grid-rows-3 w-[50vw] h-[50vw]">
        <div className='row-span-1 bg-gray-700 rounded-md overflow-hidden'>
            <Image src={"/bg1.jpg"} alt="bg1" width={300} height={300} className='h-full'></Image>
        </div>
        <div className='row-span-2 bg-gray-700 rounded-md overflow-hidden'>
            <Image src={"/bg2.jpg"} alt="bg2" width={300} height={300} className='h-full'></Image>
         </div>
        <div className='row-span-1 bg-gray-700 rounded-md overflow-hidden'>
            <Image src={"/bg3.jpg"} alt="bg3" width={300} height={300} className='h-full'></Image>
         </div>
        <div className='row-span-2 bg-gray-700 rounded-md overflow-hidden'>
            <Image src={"/bg4.jpg"} alt="bg4" width={300} height={300} className='h-full'></Image>
         </div>
        <div className='row-span-2 bg-gray-700 rounded-md overflow-hidden'>
            <Image src={"/bg5.jpg"} alt="bg5" width={300} height={300} className='h-full'></Image>
         </div>  
        <div className='row-span-1 bg-gray-700 rounded-md overflow-hidden'>
            <Image src={"/bg6.jpg"} alt="bg6" width={300} height={300} className='h-full'></Image>
         </div>
    </div>
  )
}
