import React, { useState } from 'react';
import './CSS/ProfilePage.css';

function ProfilePage() {
  const [profile, setProfile] = useState({
    photo: 'https://via.placeholder.com/150',
    fullName: 'John Doe',
    address: '123 Main St, Anytown USA',
    dateOfBirth: 'January 1, 1990',
    gender: 'Male'
  });

  return (
    <div className="container">
      <img src={profile.photo} alt="Profile Photo" className="profile-photo" />
      <h1>{profile.fullName}</h1>
      <div className="info">
        <div className="info-item">
          <div className="info-label">Address:</div>
          <div className="info-value">{profile.address}</div>
        </div>
        <div className="info-item">
          <div className="info-label">Date of Birth:</div>
          <div className="info-value">{profile.dateOfBirth}</div>
        </div>
        <div className="info-item">
          <div className="info-label">Gender:</div>
          <div className="info-value">{profile.gender}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;