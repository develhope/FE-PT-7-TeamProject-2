import NewsletterPopup from "../../components/NewsletterPopup/NewsletterPopup";
import Hero from "../../components/Hero/Hero";
import Rooms from "../../components/Rooms/Rooms";
import Spa from "../../components/Spa/Spa";
import ExploreOurOfferings from "../../components/Offerings/ExploreOurOfferings";
import Casino from "../../components/Casino/Casino";
import AboutUs from "../../components/AboutUs/AboutUs";


function Homepage() {
  return (
    <>
      <NewsletterPopup />
      <Hero />
      <Rooms />
      <Spa />
      <ExploreOurOfferings />
      <Casino />
      <AboutUs />
    </>
  );
}

export default Homepage;
