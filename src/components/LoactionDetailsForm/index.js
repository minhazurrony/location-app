import React from 'react';
import './locationDetailsForm.css';

export const LoactionDetailsForm = ({ myName, location }) => {
  return (
    <form className="custom-form" onSubmit={(e) => e.preventDefault()}>
      <div className="form-item-container">
        <label htmlFor="coordinates">Current Coordinates</label>
        <input
          type="text"
          name="coordinates"
          value={`lat: ${location.position.lat}, lng: ${location.position.lng}`}
          readOnly
        />
      </div>

      <div className="form-item-container">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={myName} readOnly />
      </div>

      <div className="form-item-container">
        <button className="submit-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
