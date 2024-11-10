import { NavBar } from "./components/navbar/navBar.jsx";
import { Hero } from "./components/heroSection/heroContent.jsx";
import { ServicesSection } from "./components/ourservices/services.jsx";
import { HighLights } from "./components/highLights/highLights.jsx";
import { ChefHistory } from "./components/chefshistory/chefHistory.jsx";
import { EmailInput } from "./components/emailInput/emailInput.gitjsx";
import { TestimonialsSection } from "./components/testimonials/testimonials-Section.jsx";
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
