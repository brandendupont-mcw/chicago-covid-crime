import React, { Fragment } from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'
import SectionHeading from 'components/sectionHeading'
import { Grid } from 'theme-ui';
import { Box } from 'theme-ui';
import { Embed } from 'theme-ui';

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

function SmallMultiples() {
  return (
    <Fragment>

        <h2> Overall Trends </h2>

        <p> Protests occured in Chicago after George Floyd's was killed. Overall reported trends in crimes changed dramatically due to a large increase in certain offenses — particularly burglary and criminal damage.
            Other reported crimes continued their post-covid trends. The top 12 reported offense types are categorized by: <b style={{color: "#981e4d"}}> &#8594; Decrease in crime, significant effect</b> 
            <b style={{color: "#1a7781"}}> &#8594; Increase in crime, significant effect</b>  <b style={{color: "##5e5e5e"}}> &#8594; No significant effect</b> </p> 
            
            


        <Grid
        gap={0}
        columns={[3]}
        width={[ 300]}>
        <Embed       sx={{
        height: "300px",
        width: "300px",
                }}
            src="https://datawrapper.dwcdn.net/VvoI6/1/" 
            />
        <Embed       sx={{
        height: "300px",
        width: "300px",
        }}
        src="https://datawrapper.dwcdn.net/8U9rq/1/" 
        />

        <Embed       sx={{
        height: "300px",
        width: "300px",
            }}
        src="https://datawrapper.dwcdn.net/jEOUY/2/" 
        />

        <Embed       sx={{
        height: "300px",
        width: "300px",
            }}
        src="https://datawrapper.dwcdn.net/R2orN/2/" 
        />
        <Embed       sx={{
        height: "300px",
        width: "300px",
                }}
            src="https://datawrapper.dwcdn.net/Ybd9X/1/" 
            />
        <Embed       sx={{
        height: "300px",
        width: "300px",
        }}
        src="https://datawrapper.dwcdn.net/2aEtL/1/" 
        />
        <Embed       sx={{
        height: "300px",
        width: "300px",
                }}
            src="https://datawrapper.dwcdn.net/RdD4z/1/"  
            />
        <Embed       sx={{
        height: "300px",
        width: "300px",
            }}
        src="https://datawrapper.dwcdn.net/tWpQl/1/"
        />

        <Embed       sx={{
        height: "300px",
        width: "300px",
        }}
        src="https://datawrapper.dwcdn.net/upX7l/2/" 
        />

        <Embed       sx={{
        height: "300px",
        width: "300px",
            }}
        src="https://datawrapper.dwcdn.net/2miEP/1/"
        />
        <Embed       sx={{
        height: "300px",
        width: "300px",
                }}
            src="https://datawrapper.dwcdn.net/lx9Kl/1/" 
            />
        <Embed       sx={{
        height: "300px",
        width: "300px",
        }}
        src="https://datawrapper.dwcdn.net/eB8CG/1/" 
        />


        
        </Grid>

        


</Fragment>
  )
}

export default SmallMultiples
