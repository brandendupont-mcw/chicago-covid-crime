import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import GlobalStyle from 'styles/global-style'

class GlobalWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayOutlines: false,
    }
  }
  componentDidMount() {
    window.addEventListener('keydown', e => this.handleKeyboardInput(e))
  }

  handleKeyboardInput(e) {
    const key = e.keyCode || e.charCode
    // Tab
    if (key === 9) {
      this.setState({ displayOutlines: true })
    }
  }

  render() {
    return (
      <Fragment>
        <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-163114241-1"></script>
            <script type="application/ld+json">{`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('config', 'UA-163114241-1');
            `}</script>
          <html lang="en" />
          <title>Loyola University Chicago</title>
          <meta name="description" content="Loyola University Chicago" />
          <meta
            name="keywords"
            content="design, ux, ui, product, graphic, health, climbing, app, interface, experience, festival, techno, code"
          />
          <meta property="og:description" content="Loyola University Chicago" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Covid-19's Effect on Chicago Crime Trends" />
                    

        </Helmet>
        <GlobalStyle displayOutlines={this.state.displayOutlines} />
        {this.props.children}
      </Fragment>
    )
  }
}

export default GlobalWrapper
