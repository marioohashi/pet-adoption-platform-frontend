// src/pages/Home.tsx
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { PetList } from "../components/PetList";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PetList />
      <Footer />
    </>
  );
}
