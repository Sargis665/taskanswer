import "./style.scss"
import icon from "../../assets/images/icon.png";
import search from "../../assets/images/search.png";
import man from "../../assets/images/man.png";
import red from "../../assets/images/red.png";
import shop from "../../assets/images/shop.png";
import orange from "../../assets/images/orange.png";
import news from "../../assets/images/new.png";
function Header() {
    return (
      <div className="header">
        <div className="topic">
            <span>Creative Corner</span>
            <span>Content Hub  </span>
            <span>Get Free Samples </span>
            <span>Custom Project</span>
           
            <img src={news} alt="" className="new" />
            <span className="newss">My Influence Rewards</span>
            <span className="marketing">Marketing Cloud</span>
            <span className="blank">Blank Templates</span>
            
        </div>
        <div className="item">
            <img src={icon} alt="" className="img" />
            <h2 className="logo">LOGO</h2>
            <input className="search" type="text" /> <img src={search} alt="" className="searchicon" />
            <img src={man} alt="" className="man" />
             <img src={red} alt="" className="red" />
              <span className="cornel">Hi Cornel A. ✔</span> 
              <span className="s356">356  </span> 
              <span className="coins">Coins</span>
                <img src={shop} alt="" className="shop" /> <span className="cart">CART</span>
                <img src={orange} alt="" className="orange"  /> <span className="p">0</span>
            </div>
            <div className="nav">
                <span className="child">All Products</span>
                <span className="child">Business Basics</span>
                <span className="child">Marketing Essentials</span>
                <span className="child">Packaging & Retail</span>
                <span className="child">Promotional & Events</span>
                <span className="child">Signs, Banners & Displays</span>
                <span className="child">Stickers & Labels</span>
                <span className="child">Real Estate Product</span>
                <span className="child">Trade Show Products</span>
            </div>
      </div>
    );
  }
  
  export default Header;