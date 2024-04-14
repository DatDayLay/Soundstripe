import logo2 from "./Images/soundstripe logo plus 1.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <sub>
        <img src={logo2} alt="" />
        <p>
          Have questions? Give us a call
          <br /> 855.224.0847
        </p>
        <p>
          &copy; 2023 Soundstripe Inc. All rights reserved.
          <br /> Built by Creators.
        </p>
      </sub>
      <sub>
        <p>ABOUT US</p>
        <ul>
          <li>
            <a href="#">Browse Library</a>
            <a href="#">Pricing</a>
            <a href="#">Artists</a>
            <a href="#">Careers</a>
            <a href="#">Music API</a>
            <a href="#">Partner Program</a>
            <a href="#">Student Discount</a>
          </li>
        </ul>
      </sub>
      <sub>
        <p>LEARN</p>
        <ul>
          <li>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Blog</a>
          </li>
        </ul>
      </sub>
      <sub>
        <p>HELP</p>
        <ul>
          <li>
            <a href="#">Support Center</a>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
          </li>
        </ul>
      </sub>
    </footer>
  );
};

export default Footer;
