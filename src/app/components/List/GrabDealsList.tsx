const GrabDealsList = () => {
    return (
      <div className="list pl-[32%]" id="grab-deals-list">
        <div className="menu-header">
          <p>Grab Deals</p>
        </div>  
        <div className="menu">
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

export default GrabDealsList;