import './About.css';

function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          We don’t just plan trips — we create unforgettable experiences.
        </p>
      </section>

      <section className="about-story">
        <h2>Our Story</h2>
        <p>
          Our journey started with a simple idea: traveling should be easy,
          exciting, and meaningful. We wanted to help people explore new places
          without stress, hidden costs, or boring plans.
        </p>
        <p>
          Today, we help travelers discover breathtaking destinations, unique
          cultures, and moments they will remember for a lifetime.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide safe, affordable, and well-planned trips
          while delivering authentic travel experiences that inspire adventure
          and connection.
        </p>
      </section>

      <section className="about-why">
        <h2>Why Travel With Us?</h2>
        <ul>
          <li>🌍 Hand-picked destinations</li>
          <li>💰 Transparent pricing — no hidden fees</li>
          <li>🧭 Experienced local guides</li>
          <li>📞 Friendly customer support</li>
          <li>⭐ Trusted by happy travelers</li>
        </ul>
      </section>

      <section className="about-promise">
        <h2>Our Promise</h2>
        <p>
          Whether you’re seeking adventure, relaxation, or cultural discovery,
          we promise to make your journey smooth, safe, and truly memorable.
        </p>
      </section>
    </div>
  );
}

export default About;