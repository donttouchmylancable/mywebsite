import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    directionLeft?:boolean,
    title: string,
    url: string,
    
}

const Skill = ({directionLeft , title, url}: Props) => {
  return (
    <div className='group realtive flex cursor pointer' >
        <motion.img initial={{
            x:directionLeft? -200 :200,
            opacity:0,
        }}
        whileInView={{
            x:0,
            opacity:1
        }}
        transition={{
            duration:1,
        }}
        src={url}
        className='object-fit w-24 h-24 filter group-hover:grayscale'
        />
        
        
        
    </div>
  )
}
/*
div className='absolute opacity-0 group-hover:opacity-80 group-hover:background-white transition duration-300 ease-in-out h-24 w-24 '>
            <div className='flex items-center justify-center h-full'>
                <p className='font-bold text-3xl text-black opacity-100'>Next.js</p>
            </div>
        </div>
*/

export default Skill