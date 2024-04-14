import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNav = function () {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <svg
        className={isOpen === false ? "hamburger" : "inactive"}
        onClick={handleNav}
        height="21"
        viewBox="0 0 21 21"
        width="21"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          fill-rule="evenodd"
          stroke=" grey"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m4.5 6.5h12" />
          <path d="m4.498 10.5h11.997" />
          <path d="m4.5 14.5h11.995" />
        </g>
      </svg>
      <AnimatePresence>
        {window.innerWidth > 199 && window.innerWidth < 721 && isOpen && (
          <motion.div
            className={isOpen ? "navmob" : "navbar"}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: isOpen ? 0 : "-100%", opacity: 1 }}
            exit={{ x: "-100%", opacity: 0.7 }}
            transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
          >
            <h1 className="cancel" onClick={handleNav}>
              X
            </h1>

            <div className="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="15"
                viewBox="0 0 21 15"
                fill="none"
                className="symbol"
              >
                <path
                  d="M0.678523 4.82216C0.859428 2.10858 3.11327 0 5.83286 0H10.0875C11.5203 0 12.5321 1.40374 12.079 2.76305C12.0265 2.92046 11.9556 3.0711 11.8676 3.2118L9.5 7L6.71504 11.6416C6.57211 11.8798 6.45568 12.133 6.36783 12.3965L6.20046 12.8986C5.78215 14.1535 4.60775 15 3.28494 15C1.50718 15 0.100256 13.4962 0.218511 11.7223L0.678523 4.82216Z"
                  fill="white"
                />
                <path
                  d="M20.3215 10.1778C20.1406 12.8914 17.8867 15 15.1671 15L10.9125 15C9.47967 15 8.46791 13.5963 8.92102 12.2369C8.97349 12.0795 9.04444 11.9289 9.13238 11.7882L11.5 8L14.285 3.3584C14.4279 3.12018 14.5443 2.86704 14.6322 2.60349L14.7995 2.10139C15.2178 0.846461 16.3922 -4.02822e-07 17.7151 -2.87178e-07C19.4928 -1.31762e-07 20.8997 1.50384 20.7815 3.27766L20.3215 10.1778Z"
                  fill="white"
                />
              </svg>
              <h3 className="sound">soundstripe</h3>
            </div>

            <a href="#" className="links">
              Features
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="arrow"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.6465 7.85355C5.74026 7.94728 5.86742 7.99994 6 7.99994C6.13258 7.99994 6.25973 7.94728 6.3535 7.85355L9.182 5.02505C9.22975 4.97893 9.26785 4.92375 9.29405 4.86275C9.32025 4.80175 9.33405 4.73614 9.33462 4.66975C9.3352 4.60336 9.32255 4.53752 9.29741 4.47607C9.27227 4.41462 9.23514 4.3588 9.1882 4.31185C9.14125 4.26491 9.08542 4.22778 9.02398 4.20264C8.96253 4.1775 8.89669 4.16485 8.8303 4.16542C8.76391 4.166 8.6983 4.17979 8.6373 4.206C8.57629 4.2322 8.52112 4.27029 8.475 4.31805L6 6.79305L3.525 4.31805C3.4307 4.22697 3.3044 4.17657 3.1733 4.17771C3.0422 4.17885 2.91679 4.23144 2.82409 4.32414C2.73139 4.41684 2.6788 4.54225 2.67766 4.67335C2.67652 4.80445 2.72692 4.93075 2.818 5.02505L5.6465 7.85355Z"
                  fill="white"
                  className="arrow"
                />
              </svg>
            </a>
            <a href="#" className="links">
              Browse Library
            </a>
            <a href="#" className="links">
              Pricing
            </a>
            <a href="#" className="links">
              Enterprise
            </a>
            <a href="#" className="links">
              Our Story
            </a>

            <a href="#" className="sign-in">
              Sign In
            </a>
            <button className="sign-up">Sign Up</button>
          </motion.div>
        )}
      </AnimatePresence>
      {window.innerWidth > 720 && !isOpen && (
        <div className={"navbar"}>
          <div className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="15"
              viewBox="0 0 21 15"
              fill="none"
              className="symbol"
            >
              <path
                d="M0.678523 4.82216C0.859428 2.10858 3.11327 0 5.83286 0H10.0875C11.5203 0 12.5321 1.40374 12.079 2.76305C12.0265 2.92046 11.9556 3.0711 11.8676 3.2118L9.5 7L6.71504 11.6416C6.57211 11.8798 6.45568 12.133 6.36783 12.3965L6.20046 12.8986C5.78215 14.1535 4.60775 15 3.28494 15C1.50718 15 0.100256 13.4962 0.218511 11.7223L0.678523 4.82216Z"
                fill="white"
              />
              <path
                d="M20.3215 10.1778C20.1406 12.8914 17.8867 15 15.1671 15L10.9125 15C9.47967 15 8.46791 13.5963 8.92102 12.2369C8.97349 12.0795 9.04444 11.9289 9.13238 11.7882L11.5 8L14.285 3.3584C14.4279 3.12018 14.5443 2.86704 14.6322 2.60349L14.7995 2.10139C15.2178 0.846461 16.3922 -4.02822e-07 17.7151 -2.87178e-07C19.4928 -1.31762e-07 20.8997 1.50384 20.7815 3.27766L20.3215 10.1778Z"
                fill="white"
              />
            </svg>
            <h3 className="sound">soundstripe</h3>
          </div>

          <a href="#" className="links">
            Features
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="arrow"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.6465 7.85355C5.74026 7.94728 5.86742 7.99994 6 7.99994C6.13258 7.99994 6.25973 7.94728 6.3535 7.85355L9.182 5.02505C9.22975 4.97893 9.26785 4.92375 9.29405 4.86275C9.32025 4.80175 9.33405 4.73614 9.33462 4.66975C9.3352 4.60336 9.32255 4.53752 9.29741 4.47607C9.27227 4.41462 9.23514 4.3588 9.1882 4.31185C9.14125 4.26491 9.08542 4.22778 9.02398 4.20264C8.96253 4.1775 8.89669 4.16485 8.8303 4.16542C8.76391 4.166 8.6983 4.17979 8.6373 4.206C8.57629 4.2322 8.52112 4.27029 8.475 4.31805L6 6.79305L3.525 4.31805C3.4307 4.22697 3.3044 4.17657 3.1733 4.17771C3.0422 4.17885 2.91679 4.23144 2.82409 4.32414C2.73139 4.41684 2.6788 4.54225 2.67766 4.67335C2.67652 4.80445 2.72692 4.93075 2.818 5.02505L5.6465 7.85355Z"
                fill="white"
                className="arrow"
              />
            </svg>
          </a>
          <a href="#" className="links">
            Browse Library
          </a>
          <a href="#" className="links">
            Pricing
          </a>
          <a href="#" className="links">
            Enterprise
          </a>
          <a href="#" className="links">
            Our Story
          </a>

          <a href="#" className="sign-in">
            Sign In
          </a>
          <button className="sign-up">Sign Up</button>
        </div>
      )}
    </>
  );
};

export default Navbar;
