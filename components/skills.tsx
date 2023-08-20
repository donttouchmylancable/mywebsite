import React from 'react'
import {useState} from 'react'
import {motion} from 'framer-motion'
import Skill from './skill.tsx'
type Props = {}

const Skills = (props: Props) => {
  
  return (
    <div>
     
      
      
    <motion.div className='h-screen flex realtive flex-col text-center md:text-left xl:flex-row max-w-[2000px] min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
         <h3 className='uppercase text-gray-500 tracking-[10px] pb-10'>Skills</h3>
        <div className='grid grid-cols-4 gap-5 px-auto'>
            <Skill title='Html' url='https://cdn.svgporn.com/logos/html-5.svg' directionLeft={true} />
            <Skill title='CSS' url='https://cdn.svgporn.com/logos/css-3.svg' directionLeft={true}/>
            <Skill title='Javascript' url='https://cdn.svgporn.com/logos/javascript.svg'/>
            <Skill title='Typescript' url='https://cdn.svgporn.com/logos/typescript-icon-round.svg'/>
            <Skill title='NPM' url='https://cdn.svgporn.com/logos/npm-icon.svg'directionLeft={true}/>
            <Skill title='React' url='https://cdn.svgporn.com/logos/react.svg'directionLeft={true}/>
            <Skill title='Next' url='https://cdn.svgporn.com/logos/nextjs-icon.svg'/>
            <Skill title='Tailwind CSS' url='https://cdn.svgporn.com/logos/tailwindcss-icon.svg'/>
            <Skill title='MongoDB' url='https://cdn.svgporn.com/logos/mongodb-icon.svg'directionLeft={true}/>
            <Skill title='Vite' url='https://cdn.svgporn.com/logos/vitejs.svg'directionLeft={true}/>
            <Skill title='Docker' url='https://cdn.svgporn.com/logos/docker-icon.svg'/>
            <Skill title='NodeJs' url='https://cdn.svgporn.com/logos/nodejs-icon-alt.svg'/>
            <Skill title='ExpressJs' url='https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg'directionLeft={true}/>

            <Skill title='Python' url='https://cdn.svgporn.com/logos/python.svg'directionLeft={true}/>
            <Skill title='C++' url='https://cdn.svgporn.com/logos/c-plusplus.svg'/>
            <Skill title='Arduino' url='https://cdn.svgporn.com/logos/arduino.svg'/>
          

            
        </div>
        
    </motion.div>
    </div>

  )
}

export default Skills