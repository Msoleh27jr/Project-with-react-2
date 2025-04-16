import "./App.css";
import Header from "./components/header/header";
import Buttons from "./components/buttons/buttons";
import logo from "./assets/navbar-brand.png";
import Boxs from "./components/boxForSmall/boxs";
import fixedIcon from "./assets/fixed-width.png";
import fixedIcon2 from "./assets/fixed-width (1).png";
import fixedIcon3 from "./assets/fixed-width (2).png";
import secondHero from "./assets/col-md-6.png";
import BoxSale from "./components/boxSale/BoxSale";
import React from "react";
import saleImg from "./assets/fixed-height.png";
import saleImg2 from "./assets/fixed-height copy.png";
import saleImg3 from "./assets/fixed-height copy 2.png";
import star from "./assets/Frame 4.png";
import install from "./assets/Frame.png";
import StarsBox from "./components/starsBox/starsBox";
import aboutBoxsImg from "./assets/Frame 1.png";
import stars from "./assets/stars.png";
import imgPro from "./assets/circle.png";
import imgPro3 from "./assets/circle copy.png";
import imgPro2 from "./assets/circle copy 2.png";
import social from './assets/social media.png'

const App = () => {
  return (
    <div>
      <header>
        <Header
          logo={logo}
          but={<Buttons text={"Login"} bg="transparent" col="white" />}
          but2={
            <Buttons
              text={"Become a member"}
              bg="rgba(35, 166, 240, 1)"
              col="white"
            />
          }
        />
        <section className="firstSection">
          <h2>Join Us</h2>
          <h1>COURSES OF EXCELLENT QUALITY</h1>
          <p>
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </p>
          <Buttons col="white" bg="rgba(35, 166, 240, 1)" text="Join Us" />
        </section>
        <section className="smallSection">
          <Boxs
            textCol="black"
            text="The best chose in your life"
            bgCol="white"
            name="2,769 online courses"
            img={fixedIcon}
          />
          <Boxs
            textCol="black"
            name={"Certified Teacher"}
            bgCol="white"
            text={"The  best  quality for our courses"}
            img={fixedIcon2}
          />
          <Boxs
            textCol="white"
            bgCol={"rgba(35, 166, 240, 1)"}
            name={"2,769 online courses"}
            img={fixedIcon3}
            text={
              "The gradual accumulation of information about atomic and small-scale behaviour..."
            }
          />
        </section>
      </header>
      <section className="secondSection">
        <img src={secondHero} alt="" />
        <aside>
          <hr style={{ width: "150px", border: "3px solid red" }} />
          <h2>Featured Products</h2>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <Buttons
            col="rgba(35, 166, 240, 1)"
            bg="transparent"
            text="Learn More"
          />
        </aside>
      </section>
      <section className="thirdSection">
        <h3>Practice Advice</h3>
        <h2>Watch our Courses</h2>
        <p className="forThirdp">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <div className="forThirdSec">
          <BoxSale
            install={install}
            about={aboutBoxsImg}
            star={star}
            img={saleImg}
            name={"Frontend developer"}
            text={
              "Tehe best frontent developer that can solve your problem in web part"
            }
          />
          <BoxSale
            install={install}
            about={aboutBoxsImg}
            star={star}
            img={saleImg2}
            name={"Graphic Design"}
            text={
              "We focus on ergonomics and meeting you where you work. It's only a keystroke away."
              }
              />
          <BoxSale
            install={install}
            about={aboutBoxsImg}
            star={star}
            img={saleImg3}
            name={"Backend developer"}
            text={"The backend can solve your problem in database"}
            />
        </div>
      </section>
      <section className="thirdSection">
        <h3>Practice Advice</h3>
        <h2>Each and every client is important.</h2>
        <p className="forThirdp">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <div className="forThirdSec">
          <StarsBox stars={stars} img={imgPro} />
          <StarsBox stars={stars} img={imgPro2} />
          <StarsBox stars={stars} img={imgPro3} />
        </div>
      </section>
      <section className="fourthSection">
        <h3>Practice Advice</h3>
        <h2>JOIN US</h2>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <div className="forInput">
          <input type="text" placeholder="Your Email" />
          <Buttons col="white" bg="rgba(35, 166, 240, 1)" text="Subscribe" />
        </div>
      </section>
      <footer>
        <div className="footerBox">
          <h2>Get In Touch</h2>
          <p>the quick fox jumps over the lazy dog</p>
          <img src={social} alt="" />
        </div>
        <div className="footerBox">
          <h2>Company info</h2>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div className="footerBox">
          <h2>Features</h2>
          <p>Business Marketing</p>
          <p>User Analytic</p>
          <p>Live Chat</p>
          <p>Unlimited Support</p>
        </div>
        <div className="footerBox">
          <h2>Resources</h2>
          <p>IOS & Android</p>
          <p>Watch a Demo</p>
          <p>Customers</p>
          <p>API</p>
        </div>
      </footer>
      <div className="downfooter">
        <h2>Made With Love By Figmaland All Right Reserved </h2>
      </div>
    </div>
  );
};

export default App;
