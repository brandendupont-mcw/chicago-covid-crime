import React from 'react'

import GlobalWrapper from 'components/global-wrapper'
import Hero from 'components/hero'
import Section from 'components/section'
import About from 'components/about'
import NotableTrends from 'components/notable_trends'
import NeighborhoodTrends from 'components/neighborhood'
import JailPopulation from 'components/jail_population'
import Footer from 'components/footer'

export default class App extends React.Component {
  render() {
    return (
      <GlobalWrapper>
        <Hero />
        <Section id={'about'}>
          <About />
        </Section>
        <Section id={'key-trends'}>
          <NotableTrends/>
        </Section>
        <Section id={'jail-population'}>
          <JailPopulation/>
        </Section>
        <Section id={'chicago-neighborhoods'}>
          <NeighborhoodTrends/>
        </Section>
        <Footer />
      </GlobalWrapper>
    )
  }
}
