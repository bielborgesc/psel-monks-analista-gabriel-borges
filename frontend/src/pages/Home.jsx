import AppSection from "../components/AppSection";
import Hero from "../components/Hero";
import Products from "../components/Products";
import ProductsLinks from "../components/ProductsLiks";
import SimpleGallery from "../components/SimpleGallery";
import SectionCards from "../components/SectionCards";
import Form from "../components/Form";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#EAE8E4] overflow-x-hidden">
      <Hero />
      <Products />
      <SimpleGallery />
      <AppSection />
      <ProductsLinks />
      {/* <SectionCards />
      <Form />
      <Footer /> */}
    </div>
  );
}
