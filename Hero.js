import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      <h1>By Creators, For Creators</h1>
      <a href="#" className="story">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          className="play"
        >
          <circle className="path" cx="11.5" cy="11.5" r="11" stroke="white" />
          <path
            d="M9.75 8.46891L15 11.5L9.75 14.5311L9.75 8.46891Z"
            stroke="white"
            className="path"
          />
        </svg>
        <span className="hear">Hear Our Story</span>
      </a>
    </div>
  );
};

export default Hero;
