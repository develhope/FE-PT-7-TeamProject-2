import React from 'react';
import './ActivitiesSection.css';

const activities = [
  { time: '9:00 AM', name: 'Junior Chef Workshop' },
  { time: '10:00 AM', name: 'Pool Games & Swimming Lessons' },
  { time: '11:00 AM', name: 'Dance Classes' },
  { time: '1:00 PM', name: 'Arts & Crafts Workshop' },
  { time: '2:00 PM', name: 'Science Experiments' },
  { time: '3:00 PM', name: 'Gaming Tournament' },
  { time: '4:00 PM', name: 'Music Lessons' },
  { time: '5:00 PM', name: 'Movie Time' }
];

const ActivitiesSection = () => (
  <>
    <h2 className="children-area-activities-title">Daily Activities</h2>
    <div className="children-area-activities">
      {activities.map((activity, idx) => (
        <div className="children-area-activity-box" key={idx}>
          <p>{activity.time}</p>
          <span>{activity.name}</span>
        </div>
      ))}
    </div>
  </>
);

export default ActivitiesSection;