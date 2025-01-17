const GrabDealsLayout = () => {
    return (
      <div className="grab-deals-layout" id="grab-deals">
        <div className="grab-deals-header">
          <p>Grab Deals</p>
        </div>  
        <div className="grab-deals-menu">
          <ul className="menu-list">
            <li className="menu-item"><a href="/">Deals</a></li>
            <li className="menu-item"><a href="/">Pizza</a></li>
            <li className="menu-item"><a href="/">Pasta</a></li>
            <li className="menu-item"><a href="/">Burger</a></li>
            <li className="menu-item"><a href="/">Sides</a></li>
            <li className="menu-item"><a href="/">Drinks</a></li>
            <li className="menu-item"><a href="/">Desserts</a></li>
            <li className="menu-item"><a href="/">Fresh Dough</a></li>
            <li className="menu-item"><a href="/">Bread & Loaf</a></li>
          </ul>
        </div>
      </div>
    );
};

export default GrabDealsLayout;