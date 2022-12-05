import * as React from "react"
import { graphql, PageProps } from "gatsby"

const Post = ({ data }: PageProps<Queries.PostPageQuery>) => {
  const post = data.markdownRemark

  return (
    <div>
      <div>
        <h1>{post?.frontmatter?.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: `${post?.html}` }} />
      </div>
    </div>
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
