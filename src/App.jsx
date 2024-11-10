import { NavBar } from "./components/navbar/navBar.jsx";
import { Hero } from "./components/HeroSection/heroContent.jsx";
import { ServicesSection } from "./components/ourservices/services.jsx";
import { HighLights } from "./components/highLights/highLights.jsx";
import { ChefHistory } from "./components/ChefsHistory/chefHistory.jsx";
import { EmailInput } from "./components/EmailInput/emailInput.jsx";
import { TestimonialsSection } from "./components/testimonials/testimonials-Section.jsx";
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
