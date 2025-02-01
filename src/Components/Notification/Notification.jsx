import React, { useState } from 'react';
import './Notification.css';
import Navbar from '../Navbar/Navbar';

const Notification = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'personal',
      message: 'Welcome John! Your profile is now complete',
      timestamp: '1 hour ago',
      isRead: false,
      category: 'personal'
    },
    {
      id: 2,
      type: 'event',
      message: 'New event "Tech Conference 2024" has been added',
      timestamp: '2 hours ago',
      isRead: false,
      category: 'events'
    },
    {
      id: 3,
      type: 'system',
      message: 'System maintenance scheduled for tomorrow',
      timestamp: '3 hours ago',
      isRead: true,
      category: 'system'
    },
    {
      id: 4,
      type: 'personal',
      message: 'Your event registration was successful',
      timestamp: '1 day ago',
      isRead: true,
      category: 'personal'
    },
    {
      id: 5,
      type: 'event',
      message: 'Reminder: Workshop starts in 2 hours',
      timestamp: '2 days ago',
      isRead: false,
      category: 'events'
    }
  ]);

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    pushNotifications: true,
    eventReminders: true
  });

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, isRead: true } : notif
    ));
  };

  const filterNotifications = (category) => {
    setSelectedCategory(category);
  };

  const filteredNotifications = selectedCategory === 'all' 
    ? notifications 
    : notifications.filter(notif => notif.category === selectedCategory);

  return (
    <>
    <Navbar/>
    <div className="notification-container">
      <div className="notification-header">
        <h2>Notifications</h2>
        <div className="notification-filters">
          <button 
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => filterNotifications('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'personal' ? 'active' : ''}`}
            onClick={() => filterNotifications('personal')}
          >
            Personal
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'events' ? 'active' : ''}`}
            onClick={() => filterNotifications('events')}
          >
            Events
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'system' ? 'active' : ''}`}
            onClick={() => filterNotifications('system')}
          >
            System
          </button>
        </div>
      </div>

      <div className="preferences-section">
        <h3>Notification Preferences</h3>
        <div className="preference-options">
          <label>
            <input 
              type="checkbox" 
              checked={preferences.emailNotifications}
              onChange={() => setPreferences({...preferences, emailNotifications: !preferences.emailNotifications})}
            />
            Email Notifications
          </label>
          <label>
            <input 
              type="checkbox" 
              checked={preferences.pushNotifications}
              onChange={() => setPreferences({...preferences, pushNotifications: !preferences.pushNotifications})}
            />
            Push Notifications
          </label>
          <label>
            <input 
              type="checkbox" 
              checked={preferences.eventReminders}
              onChange={() => setPreferences({...preferences, eventReminders: !preferences.eventReminders})}
            />
            Event Reminders
          </label>
        </div>
      </div>

      <div className="notification-list">
        {filteredNotifications.length === 0 ? (
          <div className="no-notifications">No notifications in this category</div>
        ) : (
          filteredNotifications.map((notification) => (
            <div 
              key={notification.id}
              className={`notification-item ${notification.type} ${!notification.isRead ? 'unread' : ''}`}
              onClick={() => markAsRead(notification.id)}
            >
              <div className="notification-content">
                <p className="notification-message">{notification.message}</p>
                <span className="notification-timestamp">{notification.timestamp}</span>
              </div>
              {!notification.isRead && <div className="unread-indicator"></div>}
            </div>
          ))
        )}
      </div>
    </div>
    </>
  );
};

export default Notification;