import React, { Fragment } from "react";
import styled from "styled-components";
import media from "utils/media-queries";
import { Grid } from "theme-ui";
import { Embed } from "theme-ui";

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
`;

const randomNum = Math.floor(Math.random() * 1000);

const randomId = randomNum.toString() + Date.now();

function SmallMultiples() {
  return (
    <Fragment>
      <h2> Overall Trends </h2>

      <p>
        {" "}
        Protests occured in Chicago after George Floyd was killed. Overall
        reported trends in crimes changed dramatically due to a large increase
        in certain offenses — particularly burglary and criminal damage. Other
        reported crimes continued their post-covid trends. We used the BSTS
        modeling approach set forth by{" "}
        <a href="https://osf.io/gcpq8/"> Campedelli, Gian M., et al. </a> to
        gauge the impact of containment policies on{" "}
        <a href="https://data.cityofchicago.org/Public-Safety/Crimes-2001-to-present/ijzp-q8t2">
          {" "}
          overall reported crime.
        </a>{" "}
        Predicted incidents are the estimated daily counts absent containment
        policy in Chicago.{" "}
      </p>

      <p>
        <b style={{ color: "#981e4d" }}>
          {" "}
          &#8594; Decrease in crime, significant effect
        </b>
        <b style={{ color: "#1a7781" }}>
          {" "}
          &#8594; Increase in crime, significant effect
        </b>{" "}
        <b style={{ color: "##5e5e5e" }}> &#8594; No significant effect</b>
      </p>

      <Grid gap={0} columns={[3]} width={[300]}>
        <iframe
          scrolling="no"
          frameborder="0"
          id="Assault"
          height="300px"
          width="300px"
          src="https://datawrapper.dwcdn.net/VvoI6/"
          name={1 + randomId}
        />
        <iframe
          id="Battery"
          scrolling="no"
          frameborder="0"
          height="300px"
          width="300px"
          sx={{
            height: "300px",
            width: "300px",
          }}
          src="https://datawrapper.dwcdn.net/8U9rq/"
          name={2 + randomId}
        />

        <iframe
          id="Burglary"
          scrolling="no"
          frameborder="0"
          height="300px"
          width="300px"
          src="https://datawrapper.dwcdn.net/jEOUY/"
          name={3 + randomId}
        />

        <iframe
          id="criminal damage"
          scrolling="no"
          frameborder="0"
          height="300px"
          width="300px"
          src="https://datawrapper.dwcdn.net/R2orN/"
          name={4 + randomId}
        />
        <iframe
          id="criminal trespass"
          scrolling="no"
          frameborder="0"
          height="300px"
          width="300px"
          src="https://datawrapper.dwcdn.net/Ybd9X/"
          name={5 + randomId}
        />
        <iframe
          id="Domestic Violence"
          scrolling="no"
          frameborder="0"
          height="300px"
          width="300px"
          src="https://datawrapper.dwcdn.net/yqD4M/"
          name={6 + randomId}
        />
        <iframe
          id="Motor Vehicle Theft"
          scrolling="no"
          frameborder="0"
          height="300px"
          width="300px"
          src="https://datawrapper.dwcdn.net/RdD4z/"
          name={7 + randomId}
        />
        <iframe
          id="Narcotics"
          scrolling="no"
          frameborder="0"
          height="300px"
          width="300px"
          src="https://datawrapper.dwcdn.net/viWNb/"
          name={8 + randomId}
        />

        <iframe
          id="other offense"
          scrolling="no"
          frameborder="0"
          height="300px"
          width="300px"
          src="https://datawrapper.dwcdn.net/upX7l/"
          name={9 + randomId}
        />

        <iframe
          id="Robbery"
          scrolling="no"
          frameborder="0"
          height="300px"
          width="300px"
          src="https://datawrapper.dwcdn.net/2miEP/"
          name={10 + randomId}
        />
        <iframe
          id="Theft"
          scrolling="no"
          frameborder="0"
          height="300px"
          width="300px"
          src="https://datawrapper.dwcdn.net/lx9Kl/"
          name={11 + randomId}
        />
        <iframe
          id="Weapons Violations"
          scrolling="no"
          frameborder="0"
          height="300px"
          width="300px"
          src="https://datawrapper.dwcdn.net/eB8CG/"
          name={12 + randomId}
        />
      </Grid>
    </Fragment>
  );
}

export default SmallMultiples;
