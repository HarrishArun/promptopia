import React from 'react'
import Feed from '@components/Feed'

const Home = () => {
  return (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>Discover &Share
    <br className='max-md:hidden'/><span className='orange_gradient'>AI-Powered Prompts</span></h1>
    <p>Printopia is a open source Ai Prompt sharing tool</p>
<Feed/>
  </section>
  )
}

export default Home