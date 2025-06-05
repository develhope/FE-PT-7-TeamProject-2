import React from "react";
import EventCard from "./EventCard";
import "./EventsSection.css";

const events = [
  {
    title: "High Stakes Poker Night",
    description: "Join elite players for an unforgettable poker showdown every Saturday.",
    titleClass: "casino-details-high-poker",
    descClass: "casino-details-p-high night-more-info"
  },
  {
    title: "Roulette Royale",
    description: "Win exclusive rewards in our weekend roulette tournaments.",
    titleClass: "casino-details-h3-roulette-royale",
    descClass: "casino-details-p-roulette-more-info"
  },
  {
    title: "Slots Showdown",
    description: "Climb the leaderboard in our weekly slots championship for big prizes.",
    titleClass: "casino-details-h3-slots-showdown",
    descClass: "casino-details-p-slots-more-info"
  }
];

const EventsSection = () => (
  <section className="casino-details-events-section">
    <h2 className="casino-details-h2-upcoming-events">Upcoming Events</h2>
    <div className="casino-details-event-grid">
      {events.map((event, idx) => (
        <EventCard key={idx} {...event} />
      ))}
    </div>
  </section>
);

export default EventsSection;