import * as React from "react"
import {Link} from "gatsby"
import { pageStyles } from "../css/basecss"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>

        <StaticImage
          alt="Unsplash Random Image"
          src="https://source.unsplash.com/random/1920x1080"
        />
      </Layout>
    </main>
  )
}

export default IndexPage
