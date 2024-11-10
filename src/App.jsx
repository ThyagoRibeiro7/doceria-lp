import { NavBar } from "./components/NavBar/navBar.js";
import { Hero } from "./components/HeroSection/heroContent.jsx";
import { ServicesSection } from "./components/OurServices/services.jsx";
import { HighLights } from "./components/HighLights/highLights.jsx";
import { ChefHistory } from "./components/ChefsHistory/chefHistory.jsx";
import { EmailInput } from "./components/EmailInput/emailInput.gitjsx";
import { TestimonialsSection } from "./components/Testimonials/testimonials-Section.jsx";
import { Footer } from "./components/Footer/footer.jsx";

export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ServicesSection />
      <HighLights />
      <ChefHistory />
      <EmailInput />
      <TestimonialsSection />
      <Footer />
    </>
  );
};
