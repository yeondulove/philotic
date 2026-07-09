import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Audience from "@/components/Audience";
import Books from "@/components/Books";
import About from "@/components/About";
import Submit from "@/components/Submit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Audience />
        <Books />
        <About />
        <Submit />
      </main>
      <Footer />
    </>
  );
}
