
import "./style.scss";
import facebook from "../../../../assets/images/facebook.svg"
import twitter from "../../../../assets/images/twitter.svg"
import instagram from "../../../../assets/images/instagram.svg"
import linkedin from "../../../../assets/images/linkedin.svg"
import pinterest from "../../../../assets/images/pinterest.svg"

function Contact() {
    return (
        <div className="c_container">
            <div className="join">
                <h6>JOIN OUR NEWSLETTER</h6>
                <h2>Nam ultrices ultrices nec tortor pulvinar esteras loremips est orem.</h2>
                <p>3045 10 Sunrize Avenue, 123-456-7890 <br />
                    Mon – Fri: 9:00 am – 8:00 pm, <br />
                    Sat – Sun: 9:00 am – 10 pm </p>
                <a href="https://nicepage.com/ru/c/galereya-html-shablony">contacts@esbnyc.com</a>
                <h2>Follow us</h2>
                <div className="social_icons">
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={instagram} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={pinterest} alt="" />
                </div>
                <p>©2022 Privacy policy</p>
            </div>


            <div className="contact_us">
                <h2>Contact us</h2>
                <label > Email <br />
                    <input type="email" placeholder="Enter a valid Email address" />
                </label>

                <label > Name <br />
                    <input type="name"  placeholder="Enter your Name"/>
                </label>

                <label > Message <br />
                    <textarea placeholder="Enter your message" id="" cols="30" rows="5"></textarea>
                </label>

                <button className="sub_btn"> SUBMIT</button>
            </div>
        </div>
    )
}

export default Contact