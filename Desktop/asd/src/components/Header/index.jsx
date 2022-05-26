import "./style.scss";
import Icon from "../../assets/images/icon.png";
import Modal from "../Modal";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [checkAdd,setCheckadd] =useState(false);
  return (
    <div className="Header">
      
      <nav>
        <div class="logo">
          <img src={Icon}

          />
        </div>
        <div className="icon">
          <img src="https://img.icons8.com/stickers/100/000000/align-justify.png" onClick={() => setIsOpen(true)} /></div>
        <div className="title">
          <div className="close1"></div>
          <div className="titleforh">
            <h2>Home</h2>
          </div>
        </div>
        <div className="title1"></div>
      </nav>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} > 

        <div className="pop-up">
        <h1>Registration Form</h1>  
          <form className="reg">
        <input type="text" placeholder="Your Name"  />
        <input type="password" placeholder="Password" />
        <input type="email" placeholder="Your Mail" />
        <button checkAdd={checkAdd} onClick={() => checkAdd(true)}>Click</button>
        </form>
        <p  onClick={() => setIsOpen(false)}>x</p>
        </div>    
      </Modal>
    </div>
  );
}
export default Header;