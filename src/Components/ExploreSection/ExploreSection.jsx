import React from "react";
import "./ExploreSection.css";

const ExploreSection = () => {
  return (
    <div className="explore-container">
      <h2>Explore more</h2>
      <div className="cards-container">
        <div className="card">
          <img
            src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt6a2935c750dda8a0/6179c6499778eb18575b3c0b/Airbnb-Policy-Web.png"
            alt="Community Policies"
          />
          <p>Our community policies</p>
          <p>How we build a foundation of trust.</p>
        </div>
        <div className="card">
          <img
            src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt93efaa7b7d28041c/Airbnb-Safety-Web.png"
            alt="Safety Guidelines"
          />
          <p>Safety tips and guidelines</p>
          <p>Resources to help travelers stay safe.</p>
        </div>
        <div className="card contact-card">
          <div className="contact-text">
            <p>Need to get in touch?</p>
            <p>
              We’ll start with some questions and get you to the right place.
            </p>
            <button>Contact us</button>
            <p>You can also give us feedback.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
