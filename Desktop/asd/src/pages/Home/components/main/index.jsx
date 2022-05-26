import "./style.scss"
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
;const slides = [
  { title: 'Branding Concepts', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat' },
  { title: 'Graphic Design', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat' }
];
function Main() {
  return (
    <div>
      <div className="back">
       
        <Slider className="slider" autoplay={true} >
          {slides.map((slide, index) => <div key={index}>
            <h2>{slide.title}</h2> <br />
            <div className="whitetopic">{slide.description}</div>
            <button >Learn More</button>
          </div>)}
        </Slider>
      </div>
    </div>

  );
}

export default Main;
