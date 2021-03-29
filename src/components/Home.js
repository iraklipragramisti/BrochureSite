import React from 'react'
import './Home.scss'


const Home = () => {
  return (
    <div>
      <hr className="hr1" />
      <div className="welcome-div">
        <div className="welcome-left">
          <h1 className="welcome">Welcome</h1>
          <p className="welcome-p" >
            Discover the serene beauty of the untouched nature of the national park of Alageti,
            <br />  alone, with friends or a tour guide. <br /> <br />
            Great adventures await
          </p>
        </div>
        <img className="welcome-img" src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg" alt="" />
      </div>
      <hr className="hr1" />
      <div className="dive-div">
        <img className="dive-img" src="https://c.pxhere.com/images/03/87/2ac48b7aa4f0be5c16fd5afc5704-1440097.jpg!d" alt="" />
        <div className="dive-right">
          <h1 className="dive">Dive Into Another World</h1>
          <p className="dive-p" >
            The Alageti national park allows you to enjoy many activities aside from biking, which include
            fishing, camping and even small game hunting as long as you have a gun license <br /> <br />
            We offer some extra services for more adventurous folks, so check our "Services" section for further
            information
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default Home
