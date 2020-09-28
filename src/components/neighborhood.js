import React, { Fragment } from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'
import ReactDOM from 'react-dom';
import TwoColumns from 'components/twoColumns'
import DataWrapChart from '../components/datawrap';
import { Button } from 'theme-ui'
import SectionHeadingButton from 'components/sectionHeading-buttons';
import { useState } from 'react'

const Container = styled.div`
  max-width: 700px;
  min-width: 600px;
  margin-left: auto;
  margin-right: auto;
  min-height: 650px;
  ${media.lg`
    max-width: 600px;
  `}
  ${media.sm`
  min-width: 350px;
  margin-left: auto;
  margin-right: auto;
`}
`


// defined two iframes
const srcs = {'chart':'https://datawrapper.dwcdn.net/hPCKw/27/', 'map':'https://datawrapper.dwcdn.net/9zRw1/17/'}

const tabColor = ['#EDEDED', 'white']


function NeighborhoodTrends() {

      // set initial state
      const [selectedSrc, setSrc] = useState(srcs['chart']);

      // set up left button state
      const [lbColor, setLBColor] = useState(tabColor[0]);

      //set up right button state
      const [rbColor, setRBColor] = useState(tabColor[1]);

      function handleLBClick(){
        setSrc(srcs['chart']);
        setLBColor(tabColor[0]);
        setRBColor(tabColor[1]);
      };

      function handleRBClick(){
        setSrc(srcs['map']);
        setLBColor(tabColor[1]);
        setRBColor(tabColor[0]);
      };


  return (


    
    
    <TwoColumns
      leftColumn={<SectionHeadingButton title="Chicago Neighborhoods">

<Button 
          onClick={handleLBClick}
          
        sx={{
            appearance: 'none',
            display: 'inline-block',
            textAlign: 'center',
            lineHeight: 'inherit',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 'bold',
            font: 'inherit',
            m: 0,
            px: 0,
            py: 0,
            borderRadius: 0,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            color: '#000',
            border: 'inherit',
            background: lbColor,
            borderWidth: '1px',
            borderStyle: 'solid',
            width: 70,
            height: 45,
            outline:'none',
            marginBottom: '6px',
            marginRight: '6px',
            
        }}>
        <b>Map</b>
      </Button>

      <Button 
          onClick={handleRBClick}
          
        sx={{
          appearance: 'none',
          display: 'inline-block',
          textAlign: 'center',
          lineHeight: 'inherit',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: 'bold',
          font: 'inherit',
          m: 0,
          px: 2,
          py: 2,
          borderRadius: 0,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
          color: '#000',
          border: 'inherit',
          background:rbColor,
          borderWidth: '1px',
          borderStyle: 'solid',
          width: 70,
          height: 45,
          outline:'none',
          marginBottom: '6px',
        }}>
        <b>Chart</b>
      </Button>

      
      </SectionHeadingButton> }
      rightColumn={
        <Fragment>
        <Container>

          <DataWrapChart title="Chicago Crime by Neighborhood" frameborder="0" aria-label="Symbol map" id="datawrapper-chart-FxQJZ" height="700"  allowfullscreen="true" src={selectedSrc}/></Container>

        </Fragment>
      }
    />
  )
}

export default NeighborhoodTrends
