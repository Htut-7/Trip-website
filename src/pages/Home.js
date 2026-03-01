import { NavLink } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <div className="head-section">
        <h1>Discover Journeys That Feed Your Soul</h1>
        <p>
          Handcrafted travel experiences designed to inspire, relax, and
          reconnect you with the world.
        </p>
        <NavLink to="/trips" className="cta-btn">
          Explore Trips
        </NavLink>
      </div>

      {/* POPULAR TRIPS */}
      <div className="popular-trips">
        <h3>Popular Trips</h3>

        <div className="trip-cards">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="Beach trip"
            />
            <h4>Bali Beach Escape</h4>
            <p>Relax on golden beaches and enjoy tropical sunsets.</p>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
              alt="Mountain trip"
            />
            <h4>Swiss Alps Adventure</h4>
            <p>Explore breathtaking mountain views and fresh alpine air.</p>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1549693578-d683be217e58"
              alt="City trip"
            />
            <h4>Tokyo City Explorer</h4>
            <p>Experience vibrant culture, food, and modern city life.</p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="why-us">
        <h3>Why Travel With Us</h3>

        <div className="features">
          <div>
            <h4>🌍 Handpicked Destinations</h4>
            <p>Every trip is carefully selected for quality and experience.</p>
          </div>

          <div>
            <h4>💰 Affordable Pricing</h4>
            <p>Best value trips with transparent and fair pricing.</p>
          </div>

          <div>
            <h4>⭐ Trusted by Travelers</h4>
            <p>Thousands of happy travelers around the world.</p>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
        

    </div>
  );
}

export default Home;