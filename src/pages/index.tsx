import { graphql } from 'gatsby';

import Layout from 'components/layout';
import PostGrid from 'components/PostGrid';

const Posts = ({
  data: {
    allMdx: { nodes: posts },
  },
}: any) => {
  return (
    <Layout>
      <section>
        <div>
          {posts.map((post: any) => (
            <PostGrid key={post.id} {...post} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export const PageQuery = graphql`
  query IndexPosts {
    allMdx(
      sort: { order: DECS, filed: [frontmatter__date] }
      filter: { frontmatter: { published: { eq: true } } }
      limit: 10
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
          banner {
            sharp: childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          data(formatString: "MMMM Do, YYYY")
          categories
        }
        excerpt
      }
    }
  }
`;

export default Posts;
