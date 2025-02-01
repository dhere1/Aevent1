import React from 'react'
import Navbar from '../Navbar/Navbar' 
import './Home.css'
//Import Images
import img1 from '../../Assets/streamline.jpg'
import security from '../../Assets/cyber-security.png'
import dashboard from '../../Assets/dashboard.png'
import bell from '../../Assets/bell.png'
import equalizer from '../../Assets/equalizer.png'
const Home = () => {
  return (
    <div className="home-container">

    <Navbar > </Navbar>

    <div className="hero-section">
      <h1>Streamline Your Academic Events</h1>
      <p>
        Easily manage your conferences, workshops, and seminars with our
        user-friendly registration and management system.
      </p>
      <div className="hero-image-placeholder">
        <div className='hero-img'>
        <img src={img1}></img>
        </div>
      </div>
      <button className="get-started-btn">Get Started</button>
    </div>
    <div className="key-features">
        <h2>Key Features</h2>
        <div className="features-grid">
          
          <div className="feature-item">
            <img src={security} alt="Secure Registration" />
            <h3>Secure Registration</h3>
            <p>Protect your attendees' data with our secure registration process.</p>
          </div>
          
          <div className="feature-item">
            <img src={dashboard} alt="Real-time Analytics" />
            <h3>Real-time Analytics</h3>
            <p>Track your event's performance with our real-time analytics dashboard.</p>
          </div>
         
          <div className="feature-item">
            <img src={bell} alt="Automated Reminders" />
            <h3>Automated Reminders</h3>
            <p>Send automated reminders and notifications to your attendees.</p>
          </div>
          
          <div className="feature-item">
            <img src={equalizer} alt="Customized Events" />
            <h3>Customized Events</h3>
            <p>Get your events customized according to your needs and preferences.</p>
          </div>
        </div>
  </div>
  <div className="upcoming-events">
        <h2>UPCOMING EVENTS</h2>
        <div className="events-grid">
          <div className="event-item">
            <img
              src="https://th.bing.com/th/id/OIP.3uJswFjpWEy1O8HM70_44AHaE6?rs=1&pid=ImgDetMain"
              alt="Workshop on Data Science"
              className="event-image"
            />
            <h3>Workshop on Data Science</h3>
            <p>
              Learn the fundamentals of data science and machine learning from industry experts.
            </p>
            <p>12th Aug 2024</p>
            <button className="register-btn">Register Now</button>
          </div>
          <div className="event-item">
            <img
              src="https://th.bing.com/th/id/R.42b71b490b0282698db5648438ada241?rik=PPDOSsUDEaex2Q&riu=http%3a%2f%2feverything-pr.com%2fwp-content%2fuploads%2f2015%2f10%2fPR-Conference.jpg&ehk=IILn7enqzy9wJxVKevdqQINvHltdZ06M56%2b0wlC8suw%3d&risl=&pid=ImgRaw&r=0"
              alt="Conference on AI"
              className="event-image"
            />
            <h3>Conference on AI</h3>
            <p>
              Learn the fundamentals of data science and machine learning from industry experts.
            </p>
            <p>12th Aug 2024</p>
            <button className="register-btn">Register Now</button>
          </div>
        </div>
        <button className="see-more-btn">See More</button>
      </div>

      {/* Subscribe Section */}
      <div className="subscribe-section">
        <h2>SUBSCRIBE</h2>
        <button className="subscribe-btn">To Our Updates</button>
        <div className="subscribe-links">
          <a href="#blogs">Blogs</a>
          <a href="#about-us">About Us</a>
          <a href="#contact-us">Contact Us</a>
          <a href="#upcoming-events">Upcoming Events</a>
        </div>
      </div>

      {/* Footer Section */}
      <footer>
        <p>© 2023 Academic Events. All rights reserved.</p>
      </footer>
  </div>
);

};


export default Home