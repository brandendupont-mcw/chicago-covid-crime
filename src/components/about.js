import React, { Fragment } from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'


import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import DataWrapChart from '../components/datawrap';


const Container = styled.div`
  max-width: 700px;
  min-width: 600px;
  margin-left: auto;
  margin-right: auto;
  ${media.lg`
    max-width: 600px;
  `}
  ${media.sm`
  min-width: 350px;
  margin-left: auto;
  margin-right: auto;
`}
`

function About() {
  return (
    <TwoColumns
      leftColumn={<SectionHeading>Overall Trends</SectionHeading>}
      rightColumn={
        <Fragment>
          <Container>
          <DataWrapChart title="Reported Incidents of Crime in Chicago" frameborder="0" aria-label="Interactive line chart" id="datawrapper-chart-FxQJZ" min-width="350" height="536"  allowfullscreen="true" src="//datawrapper.dwcdn.net/2Zkyr/9/
"/>  </Container>

<br></br>
<hr></hr>
<br></br>

<Container>
          <DataWrapChart title="Enforcement Driven Incidents" frameborder="0" aria-label="Interactive line chart" id="datawrapper-chart-FxQJZ" min-width="400" height="536"  allowfullscreen="true" src="//datawrapper.dwcdn.net/HThKj/4/
"/>  </Container>
        </Fragment>
      }
    />
  )
}

export default About
