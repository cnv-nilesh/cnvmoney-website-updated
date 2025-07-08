import HeroSection from "./components/hero/HeroSection";
import Clients from "./components/clients/Clients";
import Services from "./components/Services/Services";
import WhyCnv from "./components/WhyCnv/WhyCnv";
import StatsCounter from "./components/Achivement/Achivement";
import Partners from "./components/partners/Partners";
import Amc from "../app/components/AMC/Amc";
export default function Home() {
  return (
    <>
      <div className="container mt-4">
        <HeroSection />
      </div>
      <div className="container mt-4 mx-auto">
        <Services />
      </div>
      <div className="container mt-4 mx-auto">
        <WhyCnv />
      </div>
      <div className="container mt-4 mx-auto">
        <Clients />
      </div>
      <main className="">
        <StatsCounter />
      </main>
      <main className="flex items-center justify-center">
        <Partners />
      </main>

      <main className="flex items-center justify-center">
        <Amc />
      </main>
    </>
  );
}
