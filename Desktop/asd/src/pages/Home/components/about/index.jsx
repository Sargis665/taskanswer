import "./style.scss";
function About() {
  return (
    <div>
      <div className="about">
        <div className="img"></div>
        <div className="topic">
          <h1>About As</h1>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="simple">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
          <div className="ask">
            <ul>
              <li><span>&#10003;</span> Sample text. Click to </li>
              <li><span>&#10003;</span> Select the text box</li>
              <li><span>&#10003;</span> Click again or double</li>
              <li><span>&#10003;</span> Click to start editing the text.</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;