import React from 'react'
import './Footer.scss'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'


const Footer = () => {
  return (
    <div>
      <hr className="hr2" />
      <div className="footer">
        <div className="text">
          <h1 className="message">Message from founder</h1>
          <p className="content">
            I simply can't imagine a better way to immerse yourself in the life of a region,
            to explore hidden corners and appreciate nuances while enjoying the benefits and
            enormous satisfaction of traveling under your own power.
            These are experiences you cannot have behind the wheel of a car,
            or on a train or a tour bus. Active travel is, at its heart,
            a way of connecting more authentically with the world. Sure,
            Backroads provides amazing leaders, superb accommodations and meals,
            and opportunities you could never arrange on your own. But all of
            our comprehensive planning and support is aimed at something far simpler:
            bringing you the immediate, highly personal satisfaction of
            discovering a new world on your own terms.
          </p>
          <img className="signature" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/David_IV_signature.svg/1920px-David_IV_signature.svg.png" alt="" />
          <h3 style={{ marginBlockStart: "0" }}>Acho Bacho, Founder and President</h3>
        </div>
        <div className="contact">
          <h2>Contact us</h2>
          <div className="mail">
            <AiOutlineMail className="mail-icon" size="30px"/>
            <p>achobacho@gmail.com</p>
          </div>
          <div className="phone">
            <AiOutlinePhone className="phone-icon" size="30px"/>
            <p>800 90 90 20</p>
          </div>

        </div>
      </div>
      <div className="copyright"></div>
    </div>
  )
}

export default Footer
