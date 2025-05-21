import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="text-and-image">
        <div className="text-side">
          <h1 className="about-us-title">About us</h1>
          <p>
            Lous Las Vegas is a luxury resort that defines elegance and excitement.
            Located on the iconic Las Vegas Strip, our casino offers world-class gaming,
            while our refined accommodations provide ultimate comfort. Enjoy exceptional
            dining, personalized service, and exclusive experiences designed for those seeking
            the best in entertainment and relaxation. Whether you're here for a getaway or a
            celebration, Lous Las Vegas promises an unforgettable experience where luxury and
            excitement come together.
          </p>
          <p className="reviews">
            See what our guests are saying:{" "}
            <a href="#">Read our reviews</a>
          </p>
        </div>

        <div className="image-content">
          <img src="/LotusPic/aui.jpg" alt="Resort Image" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
