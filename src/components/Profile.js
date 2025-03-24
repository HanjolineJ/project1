import React from 'react';

function Profile() {
  return (
    <div className="container mt-4">
      <h2>My Profile</h2>
      {/* Placeholder image */}
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        style={{ borderRadius: '50%' }}
      />
      <div className="mt-3">
        <p><strong>Name:</strong> Jane Doe (dummy data)</p>
        <p><strong>Email:</strong> jane@example.com</p>
      </div>
    </div>
  );
}

export default Profile;
