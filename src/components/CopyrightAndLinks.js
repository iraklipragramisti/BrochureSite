import React from 'react'
import "./CopyrightAndLinks.scss"
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"

const CopyrightAndLinks = () => {
  return (
    <div className="cal-div">
      <ul className="socmedia">
        <li>
          <a href="https://facebook.com" >
            <AiOutlineFacebook className="fb-icon" size="50px" color="#4267B2" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com" >
            <AiOutlineInstagram className="insta-icon" size="50px" color="white" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com" >
            <AiOutlineTwitter className="twitter-icon" size="50px" color="#1DA1F2" />
          </a>
        </li>
      </ul>
      <p className="copyright">Copyright 2020 <br /> Lorem Ipsum</p>
    </div>
  )
}

export default CopyrightAndLinks
