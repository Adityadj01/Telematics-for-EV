import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import './CSS/ProfilePage.css';

function ProfileInfo({ profile, isEditMode, onChange }) {
  return (
    <div className="info">
      <div className="info-item">
        <div className="info-label">First Name:</div>
        <div className="info-value">
          {isEditMode ? (
            <input type="text" value={profile.fname} onChange={onChange('fname')} />
          ) : (
            profile.fname || 'Not available'
          )}
        </div>
    </div>
    <div className="info">
        <div className="info-label">Middle Name:</div>
        <div className="info-value">
          {isEditMode ? (
            <input type="text" value={profile.mname} onChange={onChange('mname')} />
          ) : (
            profile.mname || 'Not available'
          )}
        </div>
    </div>
    <div className="info">
        <div className="info-label">Last Name:</div>
        <div className="info-value">
          {isEditMode ? (
            <input type="text" value={profile.lname} onChange={onChange('lname')} />
          ) : (
            profile.lname || 'Not available'
          )}
        </div>
    </div>
    <div className="info">
        <div className="info-label">Address:</div>
        <div className="info-value">
          {isEditMode ? (
            <input type="text" value={profile.address} onChange={onChange('address')} />
          ) : (
            profile.address || 'Not available'
          )}
        </div>
    </div>
    <div className="info">
        <div className="info-label">Email:</div>
        <div className="info-value">
          {isEditMode ? (
            <input type="text" value={profile.email} onChange={onChange('email')} />
          ) : (
            profile.email || 'Not available'
          )}
        </div>
    </div>
    <div className="info">
        <div className="info-label">Date of Birth:</div>
        <div className="info-value">
          {isEditMode ? (
            <input type="text" value={profile.dateOfBirth} onChange={onChange('dateOfBirth')} />
          ) : (
            profile.dateOfBirth || 'Not available'
          )}
        </div>
    </div>
    <div className="info">
        <div className="info-label">Gender:</div>
        <div className="info-value">
          {isEditMode ? (
            <input type="text" value={profile.gender} onChange={onChange('gender')} />
          ) : (
            profile.gender || 'Not available'
          )}
        </div>
    </div>
    <div className="info">
        <div className="info-label">Vehicle Registration No:</div>
        <div className="info-value">
          {isEditMode ? (
            <input type="text" value={profile.vehicleregno} onChange={onChange('vehicleregno')} />
          ) : (
            profile.vehicleregno || 'Not available'
          )}
        </div>
    </div>
    <div className="info">
        <div className="info-label">Insurance ID:</div>
        <div className="info-value">
          {isEditMode ? (
            <input type="text" value={profile.insuranceid} onChange={onChange('insuranceid')} />
          ) : (
            profile.insuranceid || 'Not available'
          )}
        </div>
      </div>
    </div>
  );
}

function ProfilePage() {
  const [profile, setProfile] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (token) {
      const decodedToken = jwtDecode(token);
      console.log('Decoded Token:', decodedToken); // Log the decoded token to the console
      setProfile(decodedToken.user);
    }
  }, []);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    // TO DO: Implement saving the updated profile information
    setIsEditMode(false);
  };

  const handleChange = (field) => (event) => {
    setProfile({ ...profile, [field]: event.target.value });
  };

  return (
    <div className="container">
      <img src={profile.photo || 'https://via.placeholder.com/150'} alt="Profile Photo" className="profile-photo" />
      <h1>{profile.name || 'Unknown'}</h1>
      
      {isEditMode ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
      <ProfileInfo profile={profile} isEditMode={isEditMode} onChange={handleChange} />
    </div>
  );
}

export default ProfilePage;