import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import { GitHub } from "@material-ui/icons";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        <LinkedInIcon />
      </div>
      <p>
      <a href="https://www.linkdin.com/" target="_BLANK">gallula david <LinkedInIcon /></a>
      <br></br>
      <a href="https://www.github.com/" target="_BLANK">dgallula</a>
      <br></br>
       0538478654 - <a href="mailto:dgallula@gmail.com">dgallula@gmail.com</a>
         &copy; 2022 david gallula/</p>
    </div>
  );
}

export default Footer;











