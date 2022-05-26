import "./style.scss"

function Services() {
    return (
        <div className="ods">
            <h2>Our Design Services</h2>
            <p> Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. <br /> Suspendisse rhoncus laoreet purus <a href="#"> quis elementum</a> . Phasellus sed efficitur dolor, et ultricies sapien.</p>


            <div className="colors_block">
                <div className="container blue">
                    <div className="content">
                    <h3>Our Design Services</h3>
                    <div className="empty">...........</div>
                    <p className="content_p">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    </div>
                </div>


                <div className="container orange">
                    <div className="content">
                    <h3>Custom Projects</h3>
                    <div className="empty">...........</div>
                    <p className="content_p">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    </div>
                </div>


                <div className="container pink">
                    <div className="content">
                    <h3>Flexible Budget</h3>
                    <div className="empty">...........</div>
                    <p className="content_p">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    </div>
                </div>
            </div>
            <p  className="freepik"> Images from <a href="freepik.com/vectors/abstract"> Freepik</a></p>
        </div>
    )
}

export default Services