import React, { useState } from 'react';
import './CreateEvent.css';

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    medium: '',
    description: '',
    category: ''
  });

  const categories = [
    'Workshop',
    'Conference',
    'Seminar',
    'Webinar',
    'Meeting',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Data:', eventData);
    // Add your submission logic here
  };

  return (
    <div className="create-event-container">
      <h2>Create New Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Event Title</label>
          <input
            type="text"
            name="title"
            value={eventData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Event Date</label>
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Medium</label>
          <input
            type="text"
            name="medium"
            value={eventData.medium}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            value={eventData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="button-group">
          <button type="button" className="cancel-btn">
            Cancel
          </button>
          <button type="submit" className="confirm-btn">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;