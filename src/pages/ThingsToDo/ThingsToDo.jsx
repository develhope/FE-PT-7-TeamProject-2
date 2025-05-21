import React from "react";
import CardThingsToDo from "./ThingsToDoCard";
import "./ThingsToDo.css";

const activities = [
  {
    id: "grand-canyon",
    title: "Grand Canyon West",
    images: ["LotusPic/gc1.jpg", "LotusPic/gc2.jpg", "LotusPic/gc3.jpg"],
    description:
      "Experience the Grand Canyon West Rim on a full-day coach tour from Las Vegas...",
    details: ["10–11 hours", "Day Trips"],
    price: "from 150$ per adult",
  },
  {
    id: "atv",
    title: "Las Vegas Desert ATV Experience",
    images: ["LotusPic/atv1.jpg", "LotusPic/atv2.jpg", "LotusPic/atv3.jpg"],
    description: "Experience the thrill of zipping around the Mojave Desert...",
    details: ["3 hours", "Day Trips"],
    price: "from 250$ per adult",
    reverse: true,
  },
  {
    id: "helicopter",
    title: "Las Vegas Helicopter Night Flight",
    images: ["LotusPic/hn1.jpg", "LotusPic/hn2.jpg", "LotusPic/hn3.jpg"],
    description: "Soar above Las Vegas on a nighttime helicopter tour...",
    details: ["1–3 hours", "Night Trips"],
    price: "from 250$ per adult",
  },
  {
    id: "highroller",
    title: "High Roller",
    images: ["LotusPic/hr1.jpg", "LotusPic/hr2.jpg", "LotusPic/hr3.jpg"],
    description:
      "A 550-foot tall ferris wheel offering panoramic views of Las Vegas...",
    details: ["< 1 hour", "Day–Night Trips"],
    price: "from 180$ per adult",
    reverse: true,
  },
  {
    id: "bellagio",
    title: "Bellagio Botanical Garden",
    images: ["LotusPic/bc1.jpg", "LotusPic/bc2.jpg", "LotusPic/bc3.jpg"],
    description:
      "Wander through a collection of rare finds from around the world...",
    details: ["1–3 hours", "Night Trips"],
    price: "from 170$ per adult",
  },
  {
    id: "mojave",
    title: "Mojave Desert",
    images: ["LotusPic/md1.jpg", "LotusPic/md2.jpg", "LotusPic/md3.jpg"],
    description:
      "Begin your journey with a scenic drive through the Mojave Desert...",
    details: ["< 2 hours", "Day–Night Trips"],
    price: "from 140$ per adult",
    reverse: true,
  },
];

const ThingsToDo = () => {
  return (
    <main>
      <section className="las-vegas">
        <div className="content">
          <h1 className="las-vegas-title">Las Vegas</h1>
          <h2 className="las-vegas-subtitle">Activities & Attractions</h2>
          <p className="las-vegas-description">
            Las Vegas is a city full of excitement and entertainment. You can
            visit famous casinos like the Bellagio and Caesars Palace to try
            your luck at gambling. There are amazing live shows, including
            magic, music, and comedy performances. You can also explore the Las
            Vegas Strip, with its bright lights and unique hotels. For a break
            from the city, you can take a day trip to the Grand Canyon or Red
            Rock Canyon. Las Vegas truly has something for everyone!
          </p>
        </div>
        <div className="image">
          <img src="/LotusPic/aui.jpg" alt="Las Vegas" />
        </div>
      </section>

      {activities.map((activity) => (
        <CardThingsToDo key={activity.id} {...activity} />
      ))}
    </main>
  );
};

export default ThingsToDo;
