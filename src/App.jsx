import "./App.css";
import profilePic from "./assets/images/profile-pic.jpg";

function App() {
  return (
    <>
      <div className="container">
        <div className="card-container">
          <img src={profilePic} alt="" className="profile-pic" />
          <h1>Christoffer Savela Smedberg</h1>
          <h2>Arboga, Sweden</h2>
          <p>&quot;Front-end developer / Ux-designer&quot;</p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/c-savela-smedberg/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a href="https://github.com/csmithmountain" target="_blank">
              GitHub
            </a>
            <a
              href="https://www.instagram.com/c_smithmountain/"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ/hub"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/csmithmountain" target="_blank">
            Christoffer Savela Smedberg
          </a>
          .
        </div>
      </div>
    </>
  );
}

export default App;
