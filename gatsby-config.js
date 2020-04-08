const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Loyola University Chicago`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-163114241-1`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      },
    },
  ],
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    }
  ],
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        fonts: path.join(__dirname, 'src/fonts'),
        img: path.join(__dirname, 'src/img'),
        layouts: path.join(__dirname, 'src/layouts'),
        pages: path.join(__dirname, 'src/pages'),
        styles: path.join(__dirname, 'src/styles'),
        utils: path.join(__dirname, 'src/utils'),
      },
      plugins: [
        {
          resolve: `gatsby-plugin-manifest`,
          options: {
            name: `Loyola University Chicago`,
            short_name: `Loyola University Chicago`,
            start_url: `/`,
            background_color: `#f7f0eb`,
            theme_color: `#a2466c`,
            display: `standalone`,
          },
        },
      ],
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
  ],
}
