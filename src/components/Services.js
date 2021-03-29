import React from 'react'
import './Services.scss'
import road from "../assets/road.jpg"
import mountain from "../assets/mountain.webp"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Services = () => {
  return (
    <div>
      <hr className='services-hr' />
      <h1 className="services-header">Services</h1>
      <div className="services-content">
        <div className="services-left">
          <h2>Road Biking</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <h2>Mountain Biking</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          </p>
        </div>
        <div className="services-right">
          <Carousel renderThumbs={() => { return false }} showStatus={false}>
            <div>
              <img src={road} alt="" style={{ borderRadius: '10px' }} />
            </div>
            <div>
              <img src={mountain} alt="" style={{ borderRadius: '10px' }} />
            </div>
          </Carousel>
        </div>
      </div>

    </div>
  )
}

export default Services
