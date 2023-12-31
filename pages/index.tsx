
import Header from '../components/header.tsx'
import Hero from '../components/hero.tsx'
import About from '../components/about.tsx'
import Skills from '../components/skills.tsx'
import Projects from '../components/projects.tsx'
import Head from 'next/head'



export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Marian-Andrei Matei</title>
        <meta name='description' content='this is my personal portfolio of my webdev journey'/>
        <link rel='icon' href="data:image/png;base64,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"/>
    
      </Head>
      
      <Header/>
      
      <section className='snap-center' id='hero'>
        <Hero/>
      </section>
      {/*About*/}
      <section className='snap-center' id='about'>
        <About/>
      </section>
      {/*Experience*/}
      {/*Skills*/}
      <section className='snap-center'id='skills'>
        <Skills/>
      </section>
      {/*Projects*/}
      <section className='snap-center'id='skills'>
        {/*<Projects/>*/}
      </section>
      {/*Contact Me*/}
    </div>
  )
}
