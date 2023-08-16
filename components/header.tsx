import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {motion} from 'framer-motion'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 flex items-start justify-evenly z-20 p-5'>
        <motion.div initial={{
            x:-500,
            opacity:0,
            scale:0.5
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1 
        }}
        transition={{
            duration:0.7
        }}
        className="flex flex-row items-center">
        <SocialIcon 
             url='https://github.com/donttouchmylancable' 
             fgColor='gray' 
             bgColor='transparend'
            />
        <SocialIcon 
             url='https://github.com/donttouchmylancable' 
             fgColor='gray' 
             bgColor='transparend'
            />
            <SocialIcon 
             url='https://www.instagram.com/marian04.it/' 
             fgColor='gray' 
             bgColor='transparend'
            />
        </motion.div>
        <motion.div initial={{
           x:500,
           opacity:0,
           scale:0.5 
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1 
        }}
        transition={{
            duration:1.7
        }}
        >
            <SocialIcon
             className='cursor-pointer'
             network='email'
             fgColor='gray'
             bgColor='transparent'
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                Schreib mich an
            </p>
        </motion.div>
    </header>
  )
}

export default Header