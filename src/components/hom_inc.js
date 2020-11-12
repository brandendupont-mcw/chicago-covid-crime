import React, { Fragment } from "react";
import styled from "styled-components";
import media from "utils/media-queries";

import TwoColumns from "components/twoColumns";
import SectionHeading from "components/sectionHeading";
import DataWrapChart from "../components/datawrap";
import axios from "axios";

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
`;

const fetchDW = async () => {
  const response = await axios.get(
    "https://api.datawrapper.de/v3/oembed?format=json&url=https%3A%2F%2Fdatawrapper.dwcdn.net%2FWpAbK%2F2%2F"
  );

  console.log(response.data);
};

function HomIncTrends() {
  return (
    <TwoColumns
      leftColumn={<SectionHeading>Homicides and Shootings</SectionHeading>}
      rightColumn={
        <Fragment>
          <Container>
            <DataWrapChart
              title="Homicides in Chicago"
              frameborder="0"
              aria-label="Interactive line chart"
              id="datawrapper-chart-FxQJZ"
              min-width="400"
              height="450"
              allowfullscreen="true"
              src="https://datawrapper.dwcdn.net/cADlz/
"
            />
          </Container>
          <br></br>
          <hr></hr>
          <br></br>
          <Container>
            <DataWrapChart
              title="Shootings in Chicago"
              frameborder="0"
              aria-label="Interactive line chart"
              id="datawrapper-chart-FxQJZ"
              min-width="400"
              min-height="550"
              allowfullscreen="true"
              src="https://datawrapper.dwcdn.net/400jS/
"
            />

            <button onClick={fetchDW}> oembed request </button>
          </Container>
        </Fragment>
      }
    />
  );
}

export default HomIncTrends;
