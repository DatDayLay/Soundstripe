import guitar from "./Images/guitar.jpg";
import guitarMini from "./Images/guitar.jpg";

const FrameTwo = () => {
  return (
    <>
      <section>
        <div className="earn creative ">
          <h4>Creative freedom</h4>
          <p>
            “Every day I get to create music with freedom, which helps
            <br /> support Soundstripe’s incredible community of my fellow
            <br />
            creators. It truly is a dream come true for me. It’s
            <br /> a community and company I’m lucky to be a part of.”
          </p>
          <p>
            Featured artist - <span>Anish Prajapati</span>
          </p>
        </div>
        <div className="vio g">
          <img className="violin guitar" src={guitar} alt="" />
          <sub>
            <img className="keys mini" src={guitarMini} alt="" />
            <p>
              “Soundstripe allows me to
              <br /> earn a living as a creative.”
            </p>
          </sub>
        </div>
      </section>
    </>
  );
};

export default FrameTwo;
