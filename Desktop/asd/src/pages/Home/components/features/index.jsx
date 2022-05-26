import "./style.scss"
import NoCoding from "../../../../assets/images/f1.jpg"
import Seo from "../../../../assets/images/f2.jpg"
import Cloud from "../../../../assets/images/f3.jpg"
import Happy from "../../../../assets/images/f4.jpg"
import SetUp from "../../../../assets/images/f5.jpg"
import Raiting from "../../../../assets/images/f6.jpg"
function Features() {
    return (
        <div className="features" > 
            <h4>FEATURES</h4>
            <h2> Our Features & Services</h2>
            <div className="card_block">
                <div className="card">
                    <img src={NoCoding} alt="" animate__fadeIn />
                    <h4 className="card_h4"> No Coding</h4>
                    <p className="card_p">Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel elit scelerisque mauris.</p>
                    <button className="card_btn"> MORE</button>
                </div>
                <div className="card">
                    <img src={Seo} alt="" />
                    <h4 className="card_h4"> SEO Optimozation</h4>
                    <p className="card_p">Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel elit scelerisque mauris.</p>
                    <button className="card_btn"> MORE</button>
                </div>
                <div className="card">
                    <img src={Cloud} alt="" />
                    <h4 className="card_h4"> Cloud Solutions</h4>
                    <p className="card_p">Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel elit scelerisque mauris.</p>
                    <button className="card_btn"> MORE</button>
                </div>
                <div className="card">
                    <img src={Happy} alt="" />
                    <h4 className="card_h4">Happy Customers</h4>
                    <p className="card_p">Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel elit scelerisque mauris.</p>
                    <button className="card_btn"> MORE</button>
                </div>
                <div className="card">
                    <img src={SetUp} alt="" />
                    <h4 className="card_h4"> Get set up fast</h4>
                    <p className="card_p">Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel elit scelerisque mauris.</p>
                    <button className="card_btn"> MORE</button>
                </div>
                <div className="card">
                    <img src={Raiting} alt="" />
                    <h4 className="card_h4"> Top Raiting</h4>
                    <p className="card_p">Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel elit scelerisque mauris.</p>
                    <button className="card_btn"> MORE</button>
                </div>
            </div>
        </div>
    )
}
export default Features