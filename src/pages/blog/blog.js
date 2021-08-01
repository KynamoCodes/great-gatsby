import * as React from 'react'
import Layout from '../../components/layout'
import { pageStyles } from "../../css/basecss"
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import {Link} from "gatsby"

const BlogPage = ({data}) => {
  return (
    <main style={pageStyles}>
      <Layout pageTitle="My Blog Posts">
      <ul>
        {
          data.allMdx.nodes.map(node => (
            <article key={node.id}>
              <h2>
                <Link to={`/blog/${node.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>Posted: {node.frontmatter.date}</p>
            </article>
          ))
        }
      </ul>
      </Layout>
    </main>
  )
}

// To pull data into a page component, use a page query.
export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`

export default BlogPage