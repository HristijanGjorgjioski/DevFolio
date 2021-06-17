import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Christian Gjorgjioski devfolio
      </SectionTitle>
      <SectionText>
        Web Developer | Programmer | Creator | Innovative
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/HristijanGjorgjioski'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;