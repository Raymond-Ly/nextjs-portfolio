import React from 'react';
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Section, LeftSection } from './HeroStyles';
import { ContentfulProps } from '../../types';

const Hero = ({ hero }: ContentfulProps) => {
  const { title, intro } = hero.fields

  return (
    <>
      <Section>
        <LeftSection>
          <h1>
            { title }
          </h1>
          { documentToReactComponents(intro) }
        </LeftSection>
        <BackgroundAnimation />
      </Section>
    </>
  );
}


export default Hero;