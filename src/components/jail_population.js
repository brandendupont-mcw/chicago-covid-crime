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
function JailPopulation() {
    return (
      <TwoColumns
        leftColumn={<SectionHeading>Jail Population</SectionHeading>}
        rightColumn={
          <Fragment>
            <Container>
            <DataWrapChart title="Cook County Jail Population" frameborder="0" aria-label="Interactive line chart" id="datawrapper-chart-FxQJZ" min-width="400" height="536"  allowfullscreen="true" src="//datawrapper.dwcdn.net/6dP3G/3/
  "/>  </Container>
  <br></br>
  <hr></hr>
  <br></br>
  <Container>
            <DataWrapChart title="COVID-19 Cases in Cook County Jail" frameborder="0" aria-label="Interactive line chart" id="datawrapper-chart-FxQJZ" min-width="400" height="536"  allowfullscreen="true" src="//datawrapper.dwcdn.net/DQ2hw/1/
  "/>  </Container>

    
  
          </Fragment>
        }
      />
    )
  }

export default JailPopulation
