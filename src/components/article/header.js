import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { color } from 'styles/theme'



const BackArrow = styled(Link)`
  position: absolute;
  left: 10px;
  transform: rotate(90deg);
  max-width: 64px;
  max-height: 64px;
  color: ${color.grey900};
  ${media.sm`
    display: none;
  `};
  &:visited {
    color: ${color.grey900};
  }
  &:hover {
    color: ${color.grey900};
  }
  &:active {
    color: ${color.grey900};
  }
`

const Title = styled.div`
  width: 100%;
  text-align: center;
`

function ArticleHeader(props) {
  return (
    <Fragment>
        <Title>
          <h1>{props.title}</h1>
        </Title>
    </Fragment>
  )
}

export default ArticleHeader
