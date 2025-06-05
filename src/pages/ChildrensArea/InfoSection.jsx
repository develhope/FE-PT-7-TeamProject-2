import React from 'react';
import './InfoSection.css';

const infoData = [
  {
    title: 'Hours of Operation',
    content: 'Monday – Sunday: 9:00 AM – 8:00 PM\nHoliday Hours May Vary'
  },
  {
    title: 'Pricing',
    content: 'Hotel Guests: Complimentary\nDay Pass: $50 per child'
  },
  {
    title: 'Age Requirements',
    content: '4–12 Years Old\nUnder 4 Must Be Accompanied by Parent'
  },
  {
    title: 'Reservations',
    content: 'Contact the concierge desk\n24-Hour Advance Booking Required'
  }
];

const InfoSection = () => (
    <div className="info-section info-section--spaced">
    <h2 className="info-title">Important Information</h2>
    <div className="info-grid">
      {infoData.map((info, index) => (
        <div className="info-box" key={index}>
          <h3 className="info-heading">{info.title}</h3>
          <p className="info-content">
            {info.content.split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default InfoSection;