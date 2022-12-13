import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import profile from './images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faGithub, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Navbar() {
  return (
    <>
      <div className="navbar">
	  <a href="www.linkedin.com/in/jordan-zvinya-96124b1a1">
	    Linked In
	  </a>
	  <a href="www.linkedin.com/in/jordan-zvinya-96124b1a1">
	    Github
	  </a>
	  <a href="www.linkedin.com/in/jordan-zvinya-96124b1a1">
	    Resume
	  </a>
      </div>
    </>
  );
}

function Profile() {
  return (
    <>
      <div className="profile">
	  <div className="row">
	    <div className="profile_image">
	      <img src={profile} />
	    </div>
	    <div className="profile_text">
	      <h1>
	         Jordan Zvinya
	      </h1>
	      <p>
	         Hello there, welcome to my site. I am a Web developer, Software Engineer and a Solution Designer. Please enjoy my site!
	      </p>
	    </div>
	  </div>
      </div>
    </>
  );
}

function About() {
  return(
     <>
       <div className="about">
	  <h1>
	    About Myself
	  </h1>
	  <p>
	    I am a seasoned Sofware Engineer who has developed a number of solutions using the core concepts of Computer Science. 
	    I have a number of both front end and backend solutions using the modern technologies and frameworks that are shown below:
	  </p>
       </div>	  
     </>
  );
}

function Social() {
  return(
     <>
       <div className="social">
	  <FontAwesomeIcon icon={faYoutube} className="youtube"></FontAwesomeIcon>
       </div>	  
     </>
  );
}

function Webpage() {
  return (
    <>
	<div className="container">
	<Navbar />
	<Profile />
	<About />
	<Social />
	</div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Webpage />);
