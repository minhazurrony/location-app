import React from 'react';
import './locationDetailsForm.css';

export const LoactionDetailsForm = () => {
  return (
    <form className="custom-form" onSubmit={(e) => e.preventDefault()}>
      <div className="form-item-container">
        <label htmlFor="currentCoordinates">Current Coordinates</label>
        <textarea
          name="currentCoordinates"
          id="currentCoordinates"
          cols="10"
          rows="5"
        ></textarea>
      </div>

      <div className="form-item-container">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
      </div>

      <div className="form-item-container">
        <input type="submit" value="Submit" className="submit-button" />
      </div>
    </form>
  );
};
