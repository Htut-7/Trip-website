import logo from './te.jpg';
import { FiLogOut, FiX } from 'react-icons/fi';
import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function App() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <div className='nav-bar'>
        <div className='logo-container'>
          <img src={logo} alt='logo' />
        </div>

        <ul className='nav-link'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/trips'>Trips</NavLink>
          <NavLink to='/about'>About</NavLink>
        </ul>

        <div className='nav-control'>
          {/* profile modal trigger */}
          <span className="profile-link" onClick={() => setShowProfile(true)}>
            Profile
          </span>
          <FiLogOut />
        </div>
      </div>

      <Outlet />

      {/* PROFILE MODAL */}
      {showProfile && (
        <div className="modal-overlay" onClick={() => setShowProfile(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowProfile(false)}>
              <FiX />
            </button>

            <h2>My Profile</h2>
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Email:</strong> johndoe@email.com</p>

            <button className="logout-btn">
              <FiLogOut /> Logout
            </button>
          </div>
        </div>
      )}

      <div className="footer">
        <h2>Ready for Your Next Adventure?</h2>
        <p>
          Explore the world with handcrafted travel experiences designed to inspire
          and connect you with unforgettable destinations.
        </p>

        <div className="footer-bottom">
          <p>© 2026 Soulfly Travel Events. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default App;