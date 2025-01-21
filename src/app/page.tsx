import Footer from "./components/Footer/Footer";

const Home = () => {
  let year = new Date().getFullYear();
  let router = useRouter();
  return (
    <>
      <Footer />
    </>
  );
};

export default Home;
