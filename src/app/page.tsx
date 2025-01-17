import AboutUs from "./components/AboutUs/layout";
import Francise from "./components/Francise/layout";
import GrabDealsLayout from "./components/GrabDeals/layout";
import Assurance from "./components/Assurance/layout";

const Home = () => {
  let year = new Date().getFullYear();
  return (
    <>
      <div id="page-menu">
        
      </div>
      <div id="page-bottom">
        <GrabDealsLayout />
        <AboutUs />
        <Assurance />
        <Francise />
      </div>
      <footer className="footer">
        <p className="footer-message">Get yours now before its gone</p>
        <p className="footer-rights">Supraja Sri @ {year} by S's Patisserie. All rights reserved</p>
      </footer>
    </>
  );
};

export default Home;