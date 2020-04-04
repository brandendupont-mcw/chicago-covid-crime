import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'


const Section = styled.section`
  margin: 0 96px;
  ${media.lg`
    margin: 0 40px;
  `}
  ${media.sm`
    margin: 0 24px;
  `}
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  max-width: 916px;
  padding: 128px 0;
  ${media.lg`
    padding: 112px 0;
  `}
  ${media.sm`
    padding: 64px 0;
  `}
  width: 100%;
`

function SectionTopComponent(props) {
  return (
    <Section id={props.id}>
      <Container>{props.children}</Container>
    </Section>
  )
}

export default SectionTopComponent
