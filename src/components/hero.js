import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'
import Header from 'components/header'
import SectionTopComponent from 'components/top-section'
import HeaderArticle from 'components/article/header'


const HeroSection = styled.section`
  height: 100%;
  max-height: 300vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  text-align: left;
  ${media.sm`
    height: 100%;
    p + h3 {
      margin-top: 42px;
    }
  `}
  
`


function Hero() {
  return (
    <HeroSection>
      <Header />
      <SectionTopComponent>
        <HeaderArticle title="Covid-19's Effect on Chicago Crime Trends"  />
          <p> The coronavirus's rapid spread has required Chicago and Cook County justice agencies to quickly respond to the crisis. On March 24th, Chicago Police directed officers to reduce police stops and issue citations in lieu of low-level misdemeanors arrests. On March 17th, the Cook County Jail began a reassesment of bond for primarily non-violent offenders.
             </p>
          <p> Concerns of a crime wave have been raised primarily by law enforcement agencies. Early analysis by the <a href="https://www.themarshallproject.org/2020/03/27/as-coronavirus-surges-crime-declines-in-some-cities"> Marshall Project </a> suggests the opposite trend. Reported crime is down across the country in major cities.</p>
          <p>This project the effect of 2019-nCoV Containment Policies on crime trends in Chicago on a weekly basis and Cook County jail population which updates daily. Incident data is pulled from the <a href="https://data.cityofchicago.org/Public-Safety/Crimes-2001-to-present/ijzp-q8t2">Chicago Data Portal.</a> Cook County jail data is taken from the <a href="https://www.cookcountysheriff.org/data/"> Cook County Sheriff's Office.</a></p>
        
      </SectionTopComponent>
    
    </HeroSection>
  )
}
export default Hero
