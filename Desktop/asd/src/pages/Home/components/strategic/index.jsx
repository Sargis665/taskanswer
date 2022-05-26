
import "./style.scss"
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import s1 from "../../../../assets/images/s1.png"
import s2 from "../../../../assets/images/s2.png"
import down from "../../../../assets/images/down.png"

function Strategic() {
    return (
        <div className="strategic">
            <div className="App_development">
                <div className="block">
                    <AnimationOnScroll animateIn="animate__pulse">
                        <img src={s2} alt="" />
                    </AnimationOnScroll>

                    <h4>APP DEVELOPMENT</h4>
                    <p>Develop an on-demand app for your delivery business to reach your targeted customers without any interruption. </p>
                    <img className="arrow" src={down} alt="" />
                </div>
            </div>

            <div className="planning">
                <div className="block_2">
                    <AnimationOnScroll animateIn="animate__pulse">
                        <img className="str2_pic" src={s1} alt="" />
                    </AnimationOnScroll>
                    <h4 className="block2_h4">Strategic <br /> Planning</h4>
                    <p className="block2_p">Egestas dui id ornare arcu odio. In tellus integer feugiat scelerisque varius morbi enim nunc. Habitasse platea dictumst quisque sagittis. Interdum velit euismod in pellentesque massa placerat duis. Quis viverra nibh cras pulvinar mattis. </p>
                    
                </div>
            </div>
        </div>
    )
}
export default Strategic