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
  min-width: 300px;
`}
`

function NotableTrends() {
  return (
    <TwoColumns
      leftColumn={<SectionHeading>Offense Type</SectionHeading>}
      rightColumn={
        <Fragment>
          <Container>
          <DataWrapChart title="Top 10 Offenses" frameborder="0" aria-label="Column Chart" id="datawrapper-chart-FxQJZ" min-width="400" height="500"  allowfullscreen="true" src="//datawrapper.dwcdn.net/sBmMP/3/
"/></Container>

        </Fragment>
      }
    />
  )
}

export default NotableTrends
