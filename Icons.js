import one from "./Images/01.png";
import two from "./Images/02.png";
import three from "./Images/03.png";
import four from "./Images/04.png";
import five from "./Images/05.png";

const Icons = () => {
  return (
    <div className="icons">
      <div className="div-one">
        <sub>
          <img className="01" src={one} alt="" />
          <p>
            <span>
              6 layers of quality
              <br />
              control{" "}
            </span>
            for every song
          </p>
        </sub>
        <sub>
          <img className="02" src={two} alt="" />
          <p>
            <span>98.7%</span> of our library is
            <br />
            used by our customers
          </p>
        </sub>
        <sub>
          <img className="03" src={three} alt="" />
          <p>
            Library{" "}
            <span>
              built directly on
              <br />
              feedback
            </span>{" "}
            from our users
          </p>
        </sub>
      </div>
      <div className="div-two">
        <sub>
          <img className="04" src={four} alt="" />
          <p>
            <span>Made in Music City</span>
            <br />
            Nashville, TN
          </p>
        </sub>
        <sub>
          <img className="05" src={five} alt="" />
          <p>
            <span>20+ genres</span> from artists
            <br />
            of all stripes
          </p>
        </sub>
      </div>
    </div>
  );
};

export default Icons;
