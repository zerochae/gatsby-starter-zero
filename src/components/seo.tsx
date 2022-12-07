import React from "react"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
  description?: string
  title?: string
  children?: React.ReactNode
}

const Seo: React.FC<Props> = ({
  description: _description,
  title: _title,
  children,
}) => {
  const {
    site: {
      siteMetadata: { author, description, title },
    },
  } = useStaticQuery<Queries.SeoQuery>(
    graphql`
      query Seo {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = _description || description
  const metaTitle = _title || title

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  )
}

export default Seo
