import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'
import { fontSize } from 'styles/theme'

import Section from 'components/section'

const FooterText = styled.div`
  text-align: center;
  font-size: ${fontSize.f2};
  ${media.lg`
    font-size: ${fontSize.f1};
  `}
  ${media.sm`
    text-align: left;
    font-size: ${fontSize.f1};
  `}
`
const ImgDiv = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: auto;
  ${media.sm`
    width: auto;
    height: auto;
`}
`

function Footer() {
  return (
    <Section>
      <FooterText>
        This project is built and maintained by researchers at Loyola University Chicago <a href='https://www.luc.edu/ccj/'>Center for Criminal Justice Research, Policy, and Practice</a>  and The Medical College of Wisconsin
        <a href='https://www.mcw.edu/departments/epidemiology#Epidemiology'> Institute for Health and Equity</a> It uses a modified open source website. Check it out on <a href="https://github.com/gabdorf/gabriel-adorf-portfolio">Github</a>
        <br /> Thanks to Gabriel Adorf.
      </FooterText>
    </Section>
  )
}

export default Footer
