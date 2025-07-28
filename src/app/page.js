import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PhotoGallery from "./components/PhotoGallery";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <PhotoGallery />
      <Testimonials />
      <Footer />
    </>
  )
}
