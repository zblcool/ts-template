import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: '',
    siteUrl: 'https://www.yourdomain.tld'
  },
  plugins: ['gatsby-plugin-sass', 'gatsby-plugin-react-helmet'],
  proxy: {
    prefix: '/api',
    url: 'http://localhost:3000'
  }
}

export default config
