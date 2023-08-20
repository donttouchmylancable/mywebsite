import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

const Backgroundcircles = (props: Props) => {
  return (
    <motion.div
    initial={{
        opacity:0
    }}
    animate={{
        scale:[1,2,2,3],
        opacity:[0.1,0.3,0.2,0.1],
        borderRadius:["20%","20%","30%","50%","80%","30%"]
    }} 
    transition={{
        duration:2.5,
    }}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-gray-500 rounded-full h-[200px] w-[200px] mt52 animate-pulse'/>
        <div className='absolute border border-gray-500 rounded-full h-[300px] w-[300px] mt52 animate-ping'/>
        <div className='absolute border border-gray-500 rounded-full h-[150px] w-[150px] mt52 animate-ping'/>
        <div className='absolute border border-gray-500 rounded-full h-[100px] w-[100px] mt52 animate-ping'/>
    </motion.div>
  )
}

export default Backgroundcircles