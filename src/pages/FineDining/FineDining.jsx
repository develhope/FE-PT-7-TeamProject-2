import "./FineDining.css";
import Courses from "./Courses/Courses";
import { useState } from "react";
import GuestInfo from "../GuestInfo/GuestInfo";
import OrderSummary from "../Order summary/OrderSummary";

function FineDining() {
  const firstCourses = [
    {
      imgSrc:
        "/public/Menù & carousel img/menu_di_lusso/risotto-champagne-gorgonzola-tartufo.jpg",
      title: "Champagne Risotto with Gold Petals",
      description:
        "Carnaroli rice creamed with fine Champagne and garnished with thin edible gold leaves.",
      price: 25,
    },
    {
      imgSrc: "/public/Menù & carousel img/menu_di_lusso/tortelli.jpeg",
      title: "Blue Lobster Tortelli with Cognac-Infused Bisque",
      description:
        "Fresh pasta filled with lobster, served on a velvety shellfish bisque with Cognac.",
      price: 30,
    },
    {
      imgSrc: "/public/Menù & carousel img//menu_di_lusso/Tagliolini.jpeg",
      title: "Tagliolini with Alba White Truffle",
      description:
        "Thin pasta, mountain butter, and precious freshly shaved white truffle.",
      price: 35,
    },
    {
      imgSrc: "/public/Menù & carousel img/menu_di_lusso/ravioli.jpeg",
      title: "Scallop and Lime Ravioli",
      description:
        "Delicate ravioli filled with fresh scallops, served on lime cream and brown butter.",
      price: 28,
    },
    {
      imgSrc: "/public/Menù & carousel img/menu_di_lusso/gnocchi.jpeg",
      title: "Purple Potato Gnocchi with Aged Parmesan",
      description:
        "Soft amethyst-colored gnocchi served on a velvety aged Parmesan fondue.",
      price: 22,
    },
  ];

  const mainCourses = [
    {
      imgSrc: "/public/Menù & carousel img/menu_di_lusso/wagyu.jpeg",
      title: "Wagyu Filet Rossini Style",
      description:
        "Premium Wagyu beef, seared foie gras, and black truffle on a toasted crouton.",
      price: 50,
    },
    {
      imgSrc: "/public/Menù & carousel img/menu_di_lusso/thermidor.jpeg",
      title: "Lobster Thermidor",
      description:
        "Perfectly cooked lobster, gratinated with mustard and Cognac cream.",
      price: 45,
    },
    {
      imgSrc: "/public/Menù & carousel img/menu_di_lusso/piccione.jpeg",
      title: "Pigeon Stuffed with Foie Gras and Truffle",
      description:
        "Slow-cooked pigeon breast, stuffed with foie gras and truffle.",
      price: 40,
    },
    {
      imgSrc: "/public/Menù & carousel img/menu_di_lusso/branzino.jpeg",
      title: "Wild Sea Bass in Salt Crust with Champagne.",
      description:
        "Whole sea bass baked in a salt crust, served with Champagne reduction.",
      price: 38,
    },
    {
      imgSrc: "/public/Menù & carousel img/menu_di_lusso/costolette.jpeg",
      title: "Sisteron Lamb Chops in Pistachio Crust",
      description: "Tender lamb chops coated in a crunchy pistachio crust.",
      price: 42,
    },
  ];

  const desserts = [
    {
      imgSrc: "/public/Menù & carousel img/menu_di_lusso/tartin.jpeg",
      title: "Caramelized Apple Tarte Tatin with Bourbon Vanilla Ice Cream",
      description:
        "Classic French upside-down tart, served warm with artisanal ice cream.",
      price: 12,
    },
    {
      imgSrc: "/public/Menù & carousel img/menu_di_lusso/milleoglie.jpeg",
      title: "Millefeuille with Chantilly Cream and Berries",
      description:
        "Caramelized puff pastry, Chantilly cream, and berry coulis.",
      price: 10,
    },
    {
      imgSrc: "/public/Menù & carousel img/menu_di_lusso/sfera di cioccolato.jpeg",
      title: "Valrhona Chocolate Sphere with Molten Heart",
      description:
        "Finest chocolate sphere that melts under a stream of hot chocolate.",
      price: 15,
    },
    {
      imgSrc: "/public/Menù & carousel img/menu_di_lusso/macaron.jpeg",
      title: "Rose and Lychee Macaron",
      description: "Crispy shells filled with rose ganache and lychee jam.",
      price: 8,
    },
    {
      imgSrc: "/public/Menù & carousel img/menu_di_lusso/bavarese.jpeg",
      title: "Bronte Pistachio and White Chocolate Bavarois",
      description: "Silky pistachio mousse with white chocolate glaze.",
      price: 10,
    },
    {
      imgSrc: "/public/Menù & carousel img/menu_di_lusso/souffle.jpeg",
      title: "Grand Marnier Soufflé",
      description: "Light soufflé flavored with orange liqueur.",
      price: 14,
    },
  ];

  const [order, setOrder] = useState([]);

  const handleAddOrderItem = (item) => {
    setOrder((prev) => [...prev, item]);
  };

  const handleRemoveOrderItem = (index) => {
    setOrder((prev) => prev.filter((_, i) => i !== index));
  };

  const handleGuestSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="menu-header">
        <h1>Lotus Menù</h1>
        <img src="/public/logo-removebg-preview.png" alt="lotus logo" className="dining-logo" />
      </div>
      <div className="menu-container">
        <div className="menu-column">
          <h2 className="menu-title">First Courses</h2>
          <div className="menu-list">
            {firstCourses.map((dish) => (
              <Courses
                key={dish.title}
                imgSrc={dish.imgSrc}
                title={dish.title}
                description={dish.description}
                price={dish.price}
                onClick={() => handleAddOrderItem(dish)}
              />
            ))}
          </div>
        </div>
        <div className="menu-column">
          <h2 className="menu-title">Main Courses</h2>
          <div className="menu-list">
            {mainCourses.map((dish) => (
              <Courses
                key={dish.title}
                imgSrc={dish.imgSrc}
                title={dish.title}
                description={dish.description}
                price={dish.price}
                onClick={() => handleAddOrderItem(dish)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="dessert-section">
        <div className="dessert-box">
          <h2 className="dessert-title">Our Desserts</h2>
          <div className="dessert-list">
            {desserts.map((dessert) => (
              <div
                className="dessert-row dessert"
                key={dessert.title}
                onClick={() => handleAddOrderItem(dessert)}
              >
                <div className="dessert-col">
                  <img
                    src={dessert.imgSrc}
                    alt={dessert.title}
                    className="dessert-img"
                  />
                  <div>
                    <span className="dessert-name">{dessert.title}</span>
                    <div className="dessert-desc">{dessert.description}</div>
                  </div>
                </div>
                <div className="dessert-price">${dessert.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="order-guest-row">
        <OrderSummary items={order} onRemove={handleRemoveOrderItem} />
        <GuestInfo
          onSubmit={handleGuestSubmit}
          title="Guest Information"
          buttonLabel="Place Order"
        />
      </div>
    </>
  );
}

export default FineDining;
