import React from 'react'
import Project from './project.tsx'
type Props = {}

const Projects = (props: Props) => {
  return (
    <div>
        <h1>Meine Projekte</h1>
        <Project title='Coinsalamander' desc='Knock of Coingecko clone that uses its Api, but shows the All Time high directyl in the coin ranking' url='dynamic-narwhal-13f0f5.netlify.app/' img='' />
    </div>
  )
}

export default Projects