import React, { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import './CSS/ProfilePage.css';

const ProfileInfo = ({ profile, isEditMode, onChange }) => {
  const fields = [
    { label: 'First Name:', value: profile.fname, name: 'fname' },
    { label: 'Middle Name:', value: profile.mname, name: 'mname' },
    { label: 'Last Name:', value: profile.lname, name: 'lname' },
    { label: 'Address:', value: profile.address, name: 'address' },
    { label: 'Email:', value: profile.email, name: 'email' },
    { label: 'Date of Birth:', value: profile.dateOfBirth, name: 'dateOfBirth' },
    { label: 'Gender:', value: profile.gender, name: 'gender' },
    { label: 'Vehicle Registration No:', value: profile.vehicleregno, name: 'vehicleregno' },
    { label: 'Insurance ID:', value: profile.insuranceid, name: 'insuranceid' },
  ];

  return (
    <div className="info">
      {fields.map((field) => (
        <div key={field.name} className="info-item">
          <div className="info-label">{field.label}</div>
          <div className="info-value">
            {isEditMode ? (
              <input
                type={field.name === 'dateOfBirth' ? 'date' : 'text'}
                value={field.value}
                onChange={onChange(field.name)}
              />
            ) : (
              field.value || 'Not available'
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const ProfileHeader = ({ profile }) => {
  // Log the photo URL to the console
  useEffect(() => {
    console.log(profile.photo);
  }, [profile]);

  return (
    <div className="header">
      <img 
        src={profile.photo || 'https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
        alt="Profile Photo" 
        className="profile-photo" 
      />
      <h1>{profile.name || 'Unknown'}</h1>
      <h6>{profile.id || 'Unknown'}</h6>
    </div>
  );
};


const ProfileActions = ({ isEditMode, handleEdit, handleSave, onCancelEdit }) => {
  return (
    <div className="actions">
      {isEditMode? (
        <>
          <button onClick={handleSave}>Save</button>
          <button onClick={onCancelEdit}>Cancel</button>
        </>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
    </div>
  );
};

const ProfilePage = () => {
  const [profile, setProfile] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);
  const [cancelEdit, setCancelEdit] = useState(false); // New state for cancel edit
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (token) {
      const decodedToken = jwtDecode(token);
      setProfile(decodedToken.user);
    }
  }, []);

  const handleEdit = () => {
    setIsEditMode(true);
    setCancelEdit(false); // Reset cancelEdit state when entering edit mode
  };

  const onCancelEdit = () => {
    setIsEditMode(false);
    setCancelEdit(false); // Optionally reset cancelEdit state here
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:4000/update', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('auth-token'),
        },
        body: JSON.stringify({
          id: profile.id, // Assuming profile has an id property
          updates: {
            fname: profile.fname,
            mname: profile.mname,
            lname: profile.lname,
            address: profile.address,
            email: profile.email,
            dateOfBirth: profile.dateOfBirth,
            gender: profile.gender,
            vehicleregno: profile.vehicleregno,
            insuranceid: profile.insuranceid,
          },
        }),
      });
  
      if (response.ok) {
        setIsEditMode(false);
        alert('Profile updated successfully!');
      } else {
        alert('Error updating profile!');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile!');
    } finally {
      setLoading(false);
    }
  };  

  const handleChange = (field) => (event) => {
    setProfile((prevProfile) => ({ ...prevProfile, [field]: event.target.value }));
  };

  return (
    <div className="container">
      <ProfileHeader profile={profile} />
      <ProfileInfo profile={profile} isEditMode={isEditMode} onChange={handleChange} />
      <ProfileActions isEditMode={isEditMode} handleEdit={handleEdit} handleSave={handleSave} onCancelEdit={onCancelEdit} />
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default ProfilePage;