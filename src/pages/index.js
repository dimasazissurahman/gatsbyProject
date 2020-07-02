import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql, StaticQuery } from "gatsby"
import Post from "./post"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>HOME PAGE</h1>
    <StaticQuery query={query} render={data => {
      return (
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Post title={node.frontmatter.title} 
            author={node.frontmatter.author}
            date={node.frontmatter.date}
            path={node.frontmatter.path}
            body={node.frontmatter.excerpt}
            />
          ))}
        </div>
      )
    }}
    />
  </Layout>
)

const query = graphql`
query MyQuery {
  allMarkdownRemark(sort:{fields: [frontmatter___date], order:DESC}) {
    edges {
      node{
        id
        frontmatter{
          title
          date(formatString: "dddd MMM D, YYYY")
          author
          path
        }
        excerpt
      }
    }
  }
 }
`

export default IndexPage
