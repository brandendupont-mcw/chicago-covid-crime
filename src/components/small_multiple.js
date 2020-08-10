import React, { Fragment } from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'
import { Grid } from 'theme-ui';
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

        <p> Protests occured in Chicago after George Floyd was killed. Overall reported trends in crimes changed dramatically due to a large increase in certain offenses — particularly burglary and criminal damage.
            Other reported crimes continued their post-covid trends. We used the BSTS modeling approach set forth by <a href="https://osf.io/gcpq8/"> Campedelli, Gian M., et al. </a> to gauge the impact of containment policies on <a href="https://data.cityofchicago.org/Public-Safety/Crimes-2001-to-present/ijzp-q8t2"> overall reported crime.</a> Predicted incidents are the estimated daily counts absent containment policy in Chicago. </p>
            
            
            <p><b style={{color: "#981e4d"}}> &#8594; Decrease in crime, significant effect</b> 
            <b style={{color: "#1a7781"}}> &#8594; Increase in crime, significant effect</b>  <b style={{color: "##5e5e5e"}}> &#8594; No significant effect</b></p>


        <Grid
        gap={0}
        columns={[3]}
        width={[ 300]}>
        <Embed       sx={{
        height: "300px",
        width: "300px",
                }}
            src="https://datawrapper.dwcdn.net/VvoI6/9/" 
            />
        <Embed       sx={{
        height: "300px",
        width: "300px",
        }}
        src="https://datawrapper.dwcdn.net/8U9rq/10/" 
        />

        <Embed       sx={{
        height: "300px",
        width: "300px",
            }}
        src="https://datawrapper.dwcdn.net/jEOUY/10/" 
        />

        <Embed       sx={{
        height: "300px",
        width: "300px",
            }}
        src="https://datawrapper.dwcdn.net/R2orN/11/" 
        />
        <Embed       sx={{
        height: "300px",
        width: "300px",
                }}
            src="https://datawrapper.dwcdn.net/Ybd9X/9/" 
            />
        <Embed       sx={{
        height: "300px",
        width: "300px",
        }}
        src="https://datawrapper.dwcdn.net/yqD4M/12/"
        />
        <Embed       sx={{
        height: "300px",
        width: "300px",
                }}
            src="https://datawrapper.dwcdn.net/RdD4z/11/"  
            />
        <Embed       sx={{
        height: "300px",
        width: "300px",
            }}
        src="https://datawrapper.dwcdn.net/tWpQl/9/"
        />

        <Embed       sx={{
        height: "300px",
        width: "300px",
        }}
        src="https://datawrapper.dwcdn.net/upX7l/11/" 
        />

        <Embed       sx={{
        height: "300px",
        width: "300px",
            }}
        src="https://datawrapper.dwcdn.net/2miEP/10/"
        />
        <Embed       sx={{
        height: "300px",
        width: "300px",
                }}
            src="https://datawrapper.dwcdn.net/lx9Kl/10/" 
            />
        <Embed       sx={{
        height: "300px",
        width: "300px",
        }}
        src="https://datawrapper.dwcdn.net/eB8CG/9/" 
        />


        
        </Grid>

        


</Fragment>
  )
}

export default SmallMultiples
