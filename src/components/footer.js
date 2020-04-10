import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'
import { fontSize } from 'styles/theme'
import SJCLogo from '../img/sjc_logo'
import Section from 'components/section'
import LoyolaColorLogo from '../img/color_loyolo_logo'
import { color} from 'styles/theme'


const FooterText = styled.div`
  width: 50%
  text-align: center;
  font-size: ${fontSize.f3};
  ${media.lg`
    font-size: ${fontSize.f4};
  `}
  ${media.sm`
    text-align: left;
    font-size: ${fontSize.f4};
  `}
`

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex: 0 0 auto;
  ${media.lg`
  height: ${props => (props.article ? '64px' : '')};
  `}
  ${media.sm`
    display: ${props => (props.article ? 'flex' : 'block')};
  `};
  z-index: 10;
  height: ${props => (props.article ? '74px' : '')};
  ${media.xs`
    display: block;
    height: 112px;
  `}
`

export const SvgWrapper = styled.div`
  display: flex;
  flexDirection: row;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  min-height: 50px;
  color: inherit;
  background: inherit;
  flex-item {
    justify-content: center;}
`


function Footer() {
  return (
    <Section>
      <FooterText>
       <p>This project is built and maintained by researchers at Loyola University Chicago <a href='https://www.luc.edu/ccj/'>Center for Criminal Justice Research, Policy, and Practice</a>  and The Medical College of Wisconsin
        <a href='https://www.mcw.edu/departments/epidemiology#Epidemiology'> Institute for Health and Equity</a> It uses a modified open source website. Check it out on <a href="https://github.com/gabdorf/gabriel-adorf-portfolio">Github</a>. Thanks to Gabriel Adorf.</p>
        <p>This project was created with support from the John D. and Catherine T. MacArthur Foundation as part of the <a href="http://www.safetyandjusticechallenge.org/">Safety and Justice Challenge</a> , which seeks to reduce over-incarceration by changing the way America thinks about and uses jails.</p>
      </FooterText>
      <Div>
      <SvgWrapper> <SJCLogo></SJCLogo></SvgWrapper> <SvgWrapper><LoyolaColorLogo></LoyolaColorLogo> </SvgWrapper>
      </Div>
      
    </Section>
  )
}

export default Footer
