import { graphql, useStaticQuery } from 'gatsby';

const getSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          name
          title
        }
      }
    }
  `);
  return data.site.siteMetadata;
};

export default getSiteMetadata;
