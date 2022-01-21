import type { NextPage } from 'next'
import Hero from '../components/Hero/Hero';
import { Template } from '../template/Template';

const Home: NextPage = () => {
  return (
    <Template>
      <Hero />
    </Template>
  )
}

export default Home
