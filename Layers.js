import girlVibeImg from "./Images/girl-vibe.jpg";
import groupVibeImg from "./Images/group-vibe.jpg";
import girlStudioImg from "./Images/girl-studio.jpg";

const Layers = () => {
  return (
    <div className="layers">
      <div className="black">
        <img src={girlVibeImg} alt="girl wearing headphones" />
        <span>01</span>
      </div>
      <div className="white">
        <img src={groupVibeImg} alt="group playing music around a campfire" />
        <span>02</span>
      </div>
      <div className="pink">
        <span>03</span>
        <img src={girlStudioImg} alt="girl in the studio" />
      </div>
    </div>
  );
};

export default Layers;
