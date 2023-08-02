import type { GatsbyConfig } from "gatsby";

const config:GatsbyConfig = {
  graphqlTypegen: true,
  siteMetadata: {
    title: `회색 기록`,
    description: `그레이 개발로그`,
    author: `Gray`,
    siteUrl: `http://localhost:8000/`,
    menu: ["post", "about"],
    menuLink: ["/", "/about"],
  },
  plugins: [
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}

export default config
