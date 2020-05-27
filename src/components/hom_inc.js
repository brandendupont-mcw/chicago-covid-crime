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

function HomIncTrends() {
  return (
    <TwoColumns
      leftColumn={<SectionHeading>Homicides and Shootings</SectionHeading>}
      rightColumn={
        <Fragment>
          <Container>
          <DataWrapChart title="Homicides in Chicago" frameborder="0" aria-label="Interactive line chart" id="datawrapper-chart-FxQJZ" min-width="400" height="450"  allowfullscreen="true" src="//datawrapper.dwcdn.net/cADlz/5/
"/>
</Container>
<br></br>
<hr></hr>
<br></br>
          <Container>
          <DataWrapChart title="Shootings in Chicago" frameborder="0" aria-label="Interactive line chart" id="datawrapper-chart-FxQJZ" min-width="400" min-height="550"  allowfullscreen="true" src="//datawrapper.dwcdn.net/400jS/4/
"/></Container>

        </Fragment>
      }
    />
  )
}

export default HomIncTrends
