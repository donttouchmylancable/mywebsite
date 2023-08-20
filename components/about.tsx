import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import me from './sittingInTheTrain.jpeg'

type Props = {}

const About = (props: Props) => {
  return (
    <div>
      <div className='flex align-middle justify-center'><h3 className='relative top-20 px-auto  uppercase tracking-[20px] text-gray-500 text-2xl ' >About</h3> </div>
      
    <div className='h-screen flex flex-col text-center md-text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        
        <Image src={me}className='-mb-20 md:mb-0 flex-shirk-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-94 xl:w-[500px] xl:h-[600px]' alt='just me in the train looking to the side'/>
        <motion.div initial={{
            x:-200,
            opacity:0
        }}
        whileInView={{
            x:0,
            opacity:1
        }}
        transition={
        {duration:0.7}
        }
        >
            <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Mein Hintergrund</h4>
            <p>Hi ich bin Marian, ein Ingenieurinformatik 👨‍💻⚙ Student der <a href='https://www.hsbi.de/' className='text-red-400'>Fachhochschule Bielefeld</a>.</p>
            <p>
              In Meiner Freizeit gehe ich gerne ins <span className='text-blue-500'>Gym</span> und entwickle 
              <span className='text-red-500 text-lg font-bold drop-shadow-[0_0_20px_rgba(255,0,0,1)]'> Webapplikationen </span> 
              wie diese Webseite hier.
            </p>
            
        </div>
        </motion.div>
        
        
    </div>
    </div>
    
  )
}

export default About