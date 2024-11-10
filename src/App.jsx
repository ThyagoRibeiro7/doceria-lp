import { NavBar } from "./components/navbar/nav-Bar.jsx";
import { Hero } from "./components/herosection/heroContent.jsx";
import { ServicesSection } from "./components/ourservices/services.jsx";
import { HighLights } from "./components/highLights/highLights.jsx";
import { ChefHistory } from "./components/chefshistory/chefHistory.jsx";
import { EmailInput } from "./components/emailInput/email-Input.jsx";
import { TestimonialsSection } from "./components/testimonials/testimonials-Section.js";
import { Footer } from "./components/footer/footer.jsx";

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
