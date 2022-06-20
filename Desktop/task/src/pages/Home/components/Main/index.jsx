import "./style.scss";
import iconh from "../../../../assets/images/home.png";
import flyers from "../../../../assets/images/flyers.png";
import bell from "../../../../assets/images/bell.png";
import refresh from "../../../../assets/images/refresh.png";
import post from "../../../../assets/images/post.png";
function Main() {
  return (
    <div className="main">
      <div className="hom">
        <img src={iconh} alt="" />
        <span className="check">Checkout   /   Review Your Order</span>
        <div className="bold"></div>
        <button className="button">Next ▷ </button>
      </div> <br />
      <div className="number">
        <div className="chil"><p>1</p>
          <p className="your">✅Your Products  </p>  </div>
        <div className="chilr"><p>2</p>
          <p className="ship">Shipping Details</p></div>
        <div className="chilr"><p>3</p>
          <p className="pay">Payment Details</p></div>
      </div>
      <br /> <br /> <br /> <br /> <br /> <br />
      <div className="flyers">
        <img className="fly" src={flyers} alt="" />
        <p className="topi" >✅ Flyers <span> $36.00</span></p>
        <p className="qua">Quantity:<span>100</span></p>
        <span className="chl">ⓘ DETAILS</span>
        <span className="chl">&#9998; EDIT</span>
        <span className="chl">❏ COPY </span>
        <span className="chl"> ✂ REMOVE</span>

      </div>
      <div className="white"><p> <img src={bell} alt="" id="bell" /> Optional: Update Quantities and Save $15.00 on this Product</p>
        <div className="ch">
          <p className="qua1">Quantity: <span>500</span> </p> <br />
          <span className="most">Most Popular</span>
          <span className="mi">$175  </span><p className="mii">$150</p>
          <button className="refresh"> <img src={refresh} alt="" /> UPDATE</button>
        </div>
        <div className="ch">
          <p className="qua1">Quantity: <span>250</span> </p> <br />
          <span className="mostt">Best Value</span>
          <span className="mi">$350  </span><p className="mii">$250</p>
          <button className="refresh"> <img src={refresh} alt="" /> UPDATE</button>
        </div>
        <button className="file" >⌧ Files/Order Info</button>
      </div>
    </div>
  );
}

export default Main;