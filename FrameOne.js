import violin from "./Images/violin.jpg";
import keys from "./Images/keys.jpg";

const FrameOne = () => {
  return (
    <>
      <h2>
        Why artists love creating
        <br /> for Soundstripe
      </h2>
      <section>
        <div className="vio">
          <img className="violin" src={violin} alt="" />
          <sub>
            <img className="keys" src={keys} alt="" />
            <p>
              “Soundstripe allows me to
              <br /> earn a living as a creative.”
            </p>
          </sub>
        </div>
        <div className="earn">
          <h4>Earning as an artist</h4>
          <p>
            “Soundstripe allows me the freedom to earn a living as a<br />{" "}
            creative. They give me flexibility to maintain a healthy work
            <br /> life balance, and the tools and support needed to produce
            <br />
            excellent, high quality work.”
          </p>
          <p>
            Featured artist - <span>Adrian Walther</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default FrameOne;
