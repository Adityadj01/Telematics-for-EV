import React, { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import './CSS/ProfilePage.css';

function ProfilePage() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (token) {
      const decodedToken = jwtDecode(token);
      console.log('Decoded Token:', decodedToken); // Log the decoded token to the console
      setProfile(decodedToken.user);
    }
  }, []);

  return (
    <div className="container">
      <img src={profile.photo || 'https://via.placeholder.com/150'} alt="Profile Photo" className="profile-photo" />
      <h1>{profile.name || 'Unknown'}</h1>
      <div className="info">
        <div className="info-item">
          <div className="info-label">Address:</div>
          <div className="info-value">{profile.address || 'Not available'}</div>
        </div>
        <div className="info-item">
          <div className="info-label">Email:</div>
          <div className="info-value">{profile.email || 'Not available'}</div>
        </div>
        <div className="info-item">
          <div className="info-label">Date of Birth:</div>
          <div className="info-value">{profile.dateOfBirth || 'Not available'}</div>
        </div>
        <div className="info-item">
          <div className="info-label">Gender:</div>
          <div className="info-value">{profile.gender || 'Not available'}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;