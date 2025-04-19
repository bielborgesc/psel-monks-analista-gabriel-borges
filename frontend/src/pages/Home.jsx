import AppSection from "../components/AppSection";
import Hero from "../components/Hero";
import Products from "../components/Products";
import SimpleGallery from "../components/SimpleGallery";

export default function Home() {
  return (
    <div className="w-dvw h-alto bg-[#EAE8E4]">
      <Hero />
      <Products />
      <SimpleGallery />
      <AppSection />
    </div>
  );
}
