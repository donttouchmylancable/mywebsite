import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './backgroundcircles.tsx'

import me from './meBeforeMeth.jpeg'

type Props = {}

const Hero = (props: Props) => {
    const [text,count]=useTypewriter({
        words:['Hi, ich bin Marian' ,'Ich bin ein ..','Developer','Student','Mensch'],
        loop:true,
        delaySpeed:2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden '>
        <BackgroundCircles/>
        <Image src={me} alt="picture of Marian Matei "className='relative rounded-full h-32 w-32 mx-auto object-cover'/>
        
         <div className='z-40'>
            <h2 className='text-sm uppercase text-gray-300 pb-2 tracking-[15px]'>SoftwareEngineer</h2>
            <h1>
                <span className='text-5xl lg:text-6xl px-10 '>{text}</span>
                <Cursor cursorColor='black' />
            </h1>
            <div className="felx flex-row justify-evenly align-middle pt-5 ">
                <Link href='#about'>
                    <button className="heroButton">About</button>
                </Link>

                <Link href="#skills">
                    <button className="heroButton">Skills</button>
                </Link>

                <Link href='#projects'>
                    <button className="heroButton">Projects</button>
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default Hero