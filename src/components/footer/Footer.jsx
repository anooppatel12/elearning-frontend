import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
            <p>
                &copy; 2024 - All Rights Reserved. <br />
                Made With ❤ <a href="">Anoop Patel</a>
            </p>
            <div className="social-links">
                <a href=""><FaFacebook /></a>
                <a href=""><FaInstagram /></a>
                <a href=""><FaGithub /></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer