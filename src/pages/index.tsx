import type { NextPage } from 'next'
import Hero from '../components/Hero/Hero';
import { Template } from '../template/Template';
import { createClient } from 'contentful';
import { ContentfulProps } from '../types';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_KEY || ''
  })

  const res = await client.getEntries({ content_type: 'hero' })

  return {
    props: {
      hero: res.items[0]
    }
  }
}

const Home = ({ hero }: ContentfulProps) => {
  return (
    <Template>
      <Hero hero={hero} />
    </Template>
  )
}

export default Home
