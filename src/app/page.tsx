import Footer from "./components/Footer/Footer";
import NavBar from "./components/Nav/NavBar";

const Home = () => {
  let year = new Date().getFullYear();
  return (
    <>
      <NavBar />
      <Footer />
    </>
  );
};

export default Home;
