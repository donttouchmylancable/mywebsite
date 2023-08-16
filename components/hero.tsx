import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'

type Props = {}

const Hero = (props: Props) => {
    const [text,count]=useTypewriter({
        words:['Hi, ich bin Marian' ,'Ich bin ein ..','Developer','Student','Mensch'],
        loop:true,
        delaySpeed:2000,
    })
  return (
    <div>
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='black'/>
        </h1>
    </div>
  )
}

export default Hero