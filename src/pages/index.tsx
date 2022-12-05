import * as React from "react"
import { Link, graphql, PageProps } from "gatsby"

export const query = graphql`
  query IndexPage {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  console.log(data)

  const blog = data.allMarkdownRemark
  return (
    <div>
      <h4>{blog.totalCount} blogs</h4>
      {blog.edges.map(({ node }) => {
        return (
          <div key={node.id}>
            <Link to={node.fields?.slug || ""}>{node.frontmatter?.title}</Link>
          </div>
        )
      })}
    </div>
  )
}

export default IndexPage
