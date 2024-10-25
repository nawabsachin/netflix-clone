// AuthForm.js
import React, { useState } from 'react';
import './AuthForm.css'; // Use a separate CSS file for form-specific styles

function AuthForm({ toggleModal }) {
  const [password, setPassword] = useState('');
 
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={toggleModal}>&times;</span>
        <h2  className='sign'>Sign In / Sign Up</h2>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" placeholder="Enter your name" />
          </div>
        
          <div className="form-group">
            <label>Phone Number:</label>
            <input type="tel" placeholder="Enter your phone number" />
          </div>
          <div className="form-group">
            <label>OTP:</label>
            <input type="text" placeholder="Enter OTP" />
            <button type="button" className="verify-otp-button">Verify OTP</button>
          </div>
          <div className="form-group">
            <label>Create Password:</label>
            <input 
              type="password" 
              placeholder="Create password" 
              value={password} 
              onChange={handlePasswordChange} 
            />
          </div>
       
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AuthForm;
