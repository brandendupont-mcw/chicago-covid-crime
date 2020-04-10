import React from 'react'

import GlobalWrapper from 'components/global-wrapper'
import Hero from 'components/hero'
import Section from 'components/section'
import About from 'components/about'
import NotableTrends from 'components/notable_trends'
import NeighborhoodTrends from 'components/neighborhood'
import JailPopulation from 'components/jail_population'
import HomIncTrends from 'components/hom_inc'
import Footer from 'components/footer'
import styled from 'styled-components'

const Container = styled.div`
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        }`

export default class App extends React.Component {
  render() {
    return (
      <GlobalWrapper>
        <Hero />
        <Section id={'about'}>
          <About />
        </Section>
        <Section id={'jail-population'}>
          <JailPopulation/>
        </Section>
        <Section id={'hom-inc'}>
          <HomIncTrends/>
        </Section>
        <Section id={'key-trends'}>
          <NotableTrends/>
        </Section>
        <Section id={'chicago-neighborhoods'}>
          <NeighborhoodTrends/>
        </Section>
        <Footer />
      </GlobalWrapper>
    )
  }
}
