import React from "react";
import newMain from "../assets/images/new-main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Stay on top of your job search with this tracking app! Easily manage
            all job applications in one place. Track your progress for all jobs.
            Stay organized with our intuitive, user-friendly tool!
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={newMain} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
