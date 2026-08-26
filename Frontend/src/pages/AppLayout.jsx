// src/pages/AppLayout.jsx

import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './AppLayout.css';
import background from '../assets/bg.svg';
import logo from '../assets/logo.png';

const AppLayout = () => {
  const [activeModal, setActiveModal] = useState(null); // 'about' | 'contact' | 'profile' | null
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <img src={background} className="background-illustration" alt="background" />
      
      <header className="header">
        <div className="logo-container" onClick={() => navigate('/setup')} style={{ cursor: 'pointer' }}>
          <img src={logo} className="logo-img" alt="logo" />
          <span className="logo-text">Farmer's Companion</span>
        </div>
        <nav className="nav-links">
          <span onClick={() => setActiveModal('about')}>About Us</span>
          <span onClick={() => navigate('/setup')}>Dashboard</span>
          <span onClick={() => setActiveModal('contact')}>Contact Us</span>
          <span onClick={() => setActiveModal('profile')}>Profile</span>
          <span onClick={() => navigate('/')}>Change Language</span>
        </nav>
      </header>

      {/* Main Page Content */}
      <Outlet />

      {/* Interactive Modal Dialogs */}
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveModal(null)}>&times;</button>
            
            {activeModal === 'about' && (
              <div className="modal-body">
                <h2>About AgroPredict</h2>
                <p>AgroPredict is an AI-powered agricultural advisory platform designed to help modern farmers optimize crop yield and maximize profitability.</p>
                <p>By analyzing historical regional data, soil pH range, and major soil types, our system provides accurate yield forecasts and recommendations for fertilization, irrigation, and pest control tailored specifically to your farm conditions.</p>
              </div>
            )}

            {activeModal === 'contact' && (
              <div className="modal-body">
                <h2>Contact Support</h2>
                <p>If you have any questions, feedback, or need help with AgroPredict, feel free to reach out to us:</p>
                <div className="contact-details">
                  <p><strong>Developer:</strong> Ankit Kumar</p>
                  <p><strong>Email:</strong> support@agropredict.com</p>
                  <p><strong>Location:</strong> New Delhi, India</p>
                </div>
              </div>
            )}

            {activeModal === 'profile' && (
              <div className="modal-body profile-modal">
                <h2>Developer Profile</h2>
                <div className="profile-card">
                  <div className="profile-avatar">AK</div>
                  <h3>Ankit Kumar</h3>
                  <p className="profile-role">Lead Developer & ML Engineer</p>
                  <hr />
                  <p className="profile-bio">"Building smart, data-driven software solutions to empower farming communities and optimize global agricultural resource allocation."</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AppLayout;