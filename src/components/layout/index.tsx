import Header from 'components/header';
import Footer from 'components/footer';

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
