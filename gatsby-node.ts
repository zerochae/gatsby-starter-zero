const path = require("path")

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {}

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        assets: path.resolve(__dirname, "src/assets"),
        components: path.resolve(__dirname, "src/components"),
        styles: path.resolve(__dirname, "src/styles"),
        templates: path.resolve(__dirname, "src/templates"),
        typings: path.resolve(__dirname, "src/typings"),
      },
    },
  })
}

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: `post`,
    })
    createNodeField({
      node,
      name: `slug`,
      value: `/post${relativeFilePath}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query AllMarkdownRemark {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
