import React, { FC } from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "components/layout"

const Post: FC<PageProps<Queries.PostPageQuery>> = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title },
    },
  },
}) => {
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: `${html}` }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Post
