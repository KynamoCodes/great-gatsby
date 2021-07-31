import * as React from 'react'
import Layout from '../components/layout'
import { pageStyles } from "../css/basecss"
import { graphql } from 'gatsby'

const BlogPage = ({data}) => {
  return (
    <main style={pageStyles}>
      <Layout pageTitle="My Blog Posts">
      <ul>
        {
          data.allFile.nodes.map(node => (
            <li key={node.name}>
              {node.name}
            </li>
          ))
        }
      </ul>
      </Layout>
    </main>
  )
}

export const data = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage