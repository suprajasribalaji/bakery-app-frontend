import AboutUs from "./components/AboutUs/layout";
import Francise from "./components/Francise/layout";
import GrabDealsLayout from "./components/GrabDeals/layout";
import Assurance from "./components/Assurance/layout";

const Home = () => {
  let year = new Date().getFullYear();
  return (
    <>
      <div id="page-bottom">
        <GrabDealsLayout />
        <AboutUs />
        <Assurance />
        <Francise />
      </div>
      <div id="feedback-social-links">
        <div id="feedback">
          <p id="feedback-header">Partner with us to improve</p>
          <button className="flex items-center justify-center p-0 w-6 h-6 bg-zinc-400 rounded-full hover:bg-white"
            style={{ backgroundImage: 'url(/arrow-right.png)', backgroundSize: 'cover', backgroundPosition: 'center', border: 'none' }}>
          </button>
        </div>
        <div id="social-links">
          <div id="social-links-header">
            <p>Follow us</p>
          </div>
          <div id="social-links-buttons">
            <div className="flex space-x-2">
              <button className="flex items-center justify-center p-0 w-8 h-8 bg-zinc-400 rounded-full hover:bg-white"
                style={{ backgroundImage: 'url(/instagram.png)', backgroundSize: 'cover', backgroundPosition: 'center', border: 'none' }}>
              </button>
              <button className="flex items-center justify-center p-0 w-8 h-8 bg-zinc-400 rounded-full hover:bg-white"
                style={{ backgroundImage: 'url(/youtube.png)', backgroundSize: 'cover', backgroundPosition: 'center', border: 'none' }}>
              </button>
              <button className="flex items-center justify-center p-0 w-8 h-8 bg-zinc-400 rounded-full hover:bg-white"
                style={{ backgroundImage: 'url(/twitter.png)', backgroundSize: 'cover', backgroundPosition: 'center', border: 'none' }}>
              </button>
              <button className="flex items-center justify-center p-0 w-9 h-8 bg-zinc-400 rounded-full hover:bg-white"
                style={{ backgroundImage: 'url(/facebook.png)', backgroundSize: 'cover', backgroundPosition: 'center', border: 'none' }}>
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p className="footer-message">Get yours now before it's gone</p>
        <p className="footer-rights">
          Supraja Sri @ {year} by S's Patisserie. All rights reserved
        </p>
      </footer>
    </>
  );
};

export default Home;
