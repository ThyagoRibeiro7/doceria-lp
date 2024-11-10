import { NavBar } from "./components/Nav-Bar/Nav-Bar.jsx"
import { Hero } from "./components/Hero-Section/hero-content.jsx"
import { ServicesSection } from "./components/OurServices/Services.jsx";
import { HighLights } from "./components/HighLights/HighLights.jsx";
import { ChefHistory } from "./components/Chefs-History/ChefHistory.jsx";
import { EmailInput } from "./components/Email-Input/Email-Input.jsx";
import { TestimonialsSection } from "./components/Testimonials/Testimonials-Section.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { SideBar } from "./components/SideBar/SideBar.jsx";

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
