import "./Rooms.css";
import RoomsCard from "./RoomsCard";

const stanze = [
  {
    images: [
      "/LotusPic/deluxe-suite.jpeg",
      "/LotusPic/deluxe-suite-2.jpeg"
    ],
    name: "Deluxe Suite",
    description: "Elegant 600 sq ft suite with city views",
    price: "$299/night",
  },
  {
    images: [
      "/LotusPic/executive-suite.jpeg",
      "/LotusPic/executive-suite-2.jpeg"
    ],
    name: "Executive Suite",
    description: "Luxurious 900 sq ft suite with strip views",
    price: "$499/night",
  },
  {
    images: [
      "/LotusPic/presidential-suite.jpg",
      "/LotusPic/presidential-suite-2.jpg"
    ],
    name: "Presidential Suite",
    description: "Ultimate 1500 sq ft luxury experience",
    price: "$299/night",
  },
  {
    images: [
      "/LotusPic/comfortRoom.jpg",
      "/LotusPic/comfortRoom-2.jpg"
    ],
    name: "Comfort Room",
    description: "Bright and stylish 350 sq ft",
    price: "$199/night",
  },
  {
    images: [
      "/LotusPic/Family Comfort.jpg",
      "/LotusPic/FamilyComfort-2.jpg"
    ],
    name: "Family Comfort Room",
    description: "Inviting 600 sq ft room designed for families",
    price: "$549/night",
  },
  {
    images: [
      "/LotusPic/Family Suite.jpg",
      "/LotusPic/FamilySuite-2.jpg"
    ],
    name: "Family Suite",
    description: "Spacious 900 sq ft family suite",
    price: "$799/night",
  },
];

function Rooms() {
  return (
    <div className="luxury-section" id='rooms'>
      <h1>Luxury Accommodation</h1>
      <div className="rooms-grid">
        {stanze.map((stanza, i) => (
          <RoomsCard key={i} {...stanza} />
        ))}
      </div>
    </div>
  );
}

export default Rooms;