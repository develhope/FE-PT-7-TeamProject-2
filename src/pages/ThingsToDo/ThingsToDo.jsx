import React from "react";
import CardThingsToDo from "./ThingsToDoCard";
import "./ThingsToDo.css";

const activities = [
  {
    id: "grand-canyon",
    title: "Grand Canyon West",
    images: ["LotusPic/gc1.jpg", "LotusPic/gc2.jpg", "LotusPic/gc3.jpg"],
    description:
      "Experience the Grand Canyon West Rim on a full-day coach tour from Las Vegas. Travel by bus, passing scenic Lake Mead and the Joshua Tree Forest en route. Explore Eagle Point and Guano Point, or enhance your adventure with optional upgrades like the Skywalk—a glass bridge suspended 4,000 feet (1,220 meters) above the canyon floor.",
    details: ["10–11 hours", "Day Trips"],
    price: "from 150$ per adult",
  },
  {
    id: "atv",
    title: "Las Vegas Desert ATV Experience",
    images: ["LotusPic/atv1.jpg", "LotusPic/atv2.jpg", "LotusPic/atv3.jpg"],
    description:
      "Experience the thrill of zipping around the Mojave Desert when you book this small-group ATV tour from Las Vegas. You’ll be outfitted with safety gear including helmets and goggles and receive a step-by-step orientation on how to ride your ATV. A guide will lead you on a journey into the desert where you'll be able to travel along trails and take in captivating views.",
    details: ["3 hours", "Day Trips"],
    price: "from 250$ per adult",
    reverse: true,
  },
  {
    id: "helicopter",
    title: "Las Vegas Helicopter Night Flight",
    images: ["LotusPic/hn1.jpg", "LotusPic/hn2.jpg", "LotusPic/hn3.jpg"],
    description:
      "Soar above Las Vegas on a nighttime helicopter tour and admire the Strip from a whole new perspective.Skip the crowded streets below and enjoy panoramic views of iconic landmarks illuminated after dark.Capture unforgettable photos as you glide over the city lights.Be sure to book this popular experience in advance to guarantee your preferred flight time and date.",
    details: ["1–3 hours", "Night Trips"],
    price: "from 250$ per adult",
  },
  {
    id: "highroller",
    title: "High Roller",
    images: ["LotusPic/hr1.jpg", "LotusPic/hr2.jpg", "LotusPic/hr3.jpg"],
    description:
      "Currently the second largest in the world, the 550-foot tall ferris wheel located at the LINQ lets you soar above Las Vegas for panoramic views of the city. Each revolution takes about 30 minutes and each cabin holds up to 40 people. The views are prettiest at night when the city is illuminated, and you can opt for a Happy Hour ticket that comes with an open bar in the cabin.",
    details: ["< 1 hour", "Day–Night Trips"],
    price: "from 180$ per adult",
    reverse: true,
  },
  {
    id: "bellagio",
    title: "Bellagio Botanical Garden",
    images: ["LotusPic/bc1.jpg", "LotusPic/bc2.jpg", "LotusPic/bc3.jpg"],
    description:
      "The attention to detail is astounding, with nature’s beauty displayed in all its glory.Wander through a collection of rare finds from around the world, selected for Bellagio.Admire the essence of each season, brought to life with stunning plants, flowers, and trees.Every display tells a unique story through color, texture, and scent.It’s a living gallery that celebrates nature’s finest artistry.",
    details: ["1–3 hours", "Night Trips"],
    price: "from 170$ per adult",
  },
  {
    id: "mojave",
    title: "Mojave Desert",
    images: ["LotusPic/md1.jpg", "LotusPic/md2.jpg", "LotusPic/md3.jpg"],
    description:
      "Discover the bold contrasts of Las Vegas on a tour that blends natural beauty with artistic wonder. Begin your journey with a scenic drive through the Mojave Desert, where sweeping views and sun-soaked landscapes set the stage.Visit the iconic Seven Magic Mountains, a stunning art installation of brightly colored stacked boulders.Take in the unique fusion of nature and bright lights of Las Vegas in one unforgettable experience.",
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
