import Header from 'components/header';
import Footer from 'components/footer';
import Helmet from 'react-helmet';
import metadata from 'hooks/getSiteMetadata';

const Layout = ({ children }: any) => {
  const { title, description } = metadata();
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
