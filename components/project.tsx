import  Image  from 'next/image'
import React from 'react'

type Props = {
    title:string,
    desc:string,
    url:string,
    img:string
}

const Project = ({title,desc,url,img}: Props) => {
  return (
    <div>
        <div>
            <p>{title}</p>
            <p>{desc}</p>
            {url?<a href={url} >ausprobieren</a>:<p>kein Link</p>}
        </div>
        <Image src={img} alt={title} width={500} height={500}></Image>


    </div>
  )
}

export default Project