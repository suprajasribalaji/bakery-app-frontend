import Footer from "./components/Footer/Footer";
import NavBar from "./components/Nav/NavBar";

const Home = () => {
  let year = new Date().getFullYear();
  let router = useRouter();
  return (
    <>
      <NavBar />
      <Footer />
    </>
  );
};

export default Home;
