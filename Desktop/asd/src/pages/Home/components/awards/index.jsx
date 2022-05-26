
import "./style.scss"
import line from "../../../../assets/images/line.png"
function Awards() {
    return (
        <div className="awards">
            <h2>Awards </h2>
            <img src={line} alt="" />

            <div className="cards_block">
                <div className="card">
                    <p> <b>5</b>  Webby Awards <br />
                        <b>2</b>    Cannes Gold Integrated  Lions <br />
                        <b>2</b>  D&AD Digital Design <br />
                        <b>2</b>   ADC Digital
                    </p>
                </div>

                <div className="card">
                    <p> <b>2</b>   One Show <br />
                        <b>1</b>   SXSW Interactive Experiment <br />
                        <b>3</b>  CSSDA Site of the Day <br />
                        <b>2</b>   CSSDA Site of the Year
                    </p>
                </div>

                <div className="card">
                    <p> <b>13</b> FWA Site of the Day <br />
                        <b>3</b>  FWA Mobile of the Day <br />
                        <b>1</b>  Adobe+FWA Cutting Edge <br />
                        <b>14</b>  Awwwards Site of the <br /> Day
                    </p>
                </div>
            </div>
            <button className="awd_btn"> LEARN MORE</button>
        </div>
    )
}
export default Awards