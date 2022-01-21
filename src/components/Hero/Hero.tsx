import React from 'react';
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';

import { Section, LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section>
      <LeftSection>
        <h1>
          Ray&rsquo;s Portfolio
        </h1>
        <p>
          Welcome!!!!!!!
        </p>
      </LeftSection>
      <BackgroundAnimation />
    </Section>
  </>
);

export default Hero;