import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Testimonials from "./components/Testimonials";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Testimonials />
      <Features />
      <Pricing />
      <Footer />
    </>
  );
}
