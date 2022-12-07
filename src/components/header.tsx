import React, { FC } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/css"

interface Menu {
  key: string
  label: string
  url: string
}

interface Props {
  siteTitle: string
  siteMenu: Menu[]
}

const Header: FC<Props> = ({ siteTitle, siteMenu }) => {
  return (
    <header
      className={css`
        margin: 0 auto;
        padding: var(--space-4) var(--size-gutter);
        display: flex;
        align-items: center;
        justify-content: space-between;
      `}
    >
      <Link
        to="/"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
      <ul
        className={css`
          display: flex;
          flex-direction: row;
          column-gap: var(--size-gap);
        `}
      >
        {siteMenu.map(({ key, label, url }) => (
          <li key={key}>
            <Link to={`${url}`}>{label}</Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
