import React, { PropsWithChildren } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "components/header"

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const {
    site: {
      siteMetadata: { author, menu, title, menuLink },
    },
  } = useStaticQuery<Queries.MetaDataQuery>(graphql`
    query MetaData {
      site {
        siteMetadata {
          title
          author
          menu
          menuLink
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={title}
        siteMenu={menu.map((_menu, index) => ({
          key: _menu,
          label: _menu,
          url: menuLink[index],
        }))}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()}
          {` `}
          {author}
        </footer>
      </div>
    </>
  )
}

export default Layout
