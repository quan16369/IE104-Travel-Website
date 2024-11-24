import BackToTop from "../../components/BackToTop";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div> {children}</div>
      <BackToTop />
      <Footer />
    </>
  );
}

export default DefaultLayout;
