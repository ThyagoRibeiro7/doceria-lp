import { NavBar } from "./components/Navbar/nav-Bar.jsx";
import { Hero } from "./components/Herosection/heroContent.jsx";
import { ServicesSection } from "./components/OurServices/services.jsx";
import { HighLights } from "./components/HighLights/highLights.jsx";
import { ChefHistory } from "./components/Chefshistory/chefHistory.jsx";
import { EmailInput } from "./components/EmailInput/email-Input.jsx";
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
