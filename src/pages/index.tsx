import React, { FC } from "react"
import { Link, graphql, PageProps } from "gatsby"
import Layout from "components/layout"
import "styles/index.css"
import { css } from "@emotion/css"

export const query = graphql`
  query IndexPage {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
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

const IndexPage: FC<PageProps<Queries.IndexPageQuery>> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <div>
        <ul
          className={css`
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: var(--size-gap);
          `}
        >
          {edges.map(
            ({
              node: {
                fields: { slug },
                frontmatter: { title, date },
                id,
              },
            }) => {
              return (
                <li
                  key={id}
                  className={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                  `}
                >
                  <Link to={slug}>{title}</Link>
                  <p>{date}</p>
                </li>
              )
            }
          )}
        </ul>
      </div>
    </Layout>
  )
}

export default IndexPage
