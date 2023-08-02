import type { GatsbyNode } from "gatsby"
import { createFilePath } from "gatsby-source-filesystem"
import path from "path"

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  getConfig,
  actions,
}) => {
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

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  getNode,
  actions,
}) => {
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

type Edges = {
  node: {
    fields: {
      slug: string
    }
  }
}

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
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

  if (result.errors) {
    throw result.errors
  }

  (result.data as any)?.allMarkdownRemark?.edges.forEach(({ node }: Edges) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post.tsx`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
