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
  min-height: 700
  ${media.lg`
    max-width: 600px;
  `}
  ${media.sm`
  min-width: 350px;
  margin-left: auto;
  margin-right: auto;
`}
`

function NeighborhoodTrends() {
  return (
    <TwoColumns
      leftColumn={<SectionHeading>Chicago Neighborhoods</SectionHeading>}
      rightColumn={
        <Fragment>
        <Container>

          <DataWrapChart title="Chicago Crime" frameborder="0" aria-label="Column Chart" id="datawrapper-chart-FxQJZ" height="700"  allowfullscreen="true" src="//datawrapper.dwcdn.net/OJWH1/2/
"/></Container>

        </Fragment>
      }
    />
  )
}

export default NeighborhoodTrends
