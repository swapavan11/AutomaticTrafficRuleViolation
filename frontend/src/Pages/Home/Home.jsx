import ModelsCarousel from "../../Components/Home/Models";
import Functions from "../../Components/Home/Functions";
import InfoCard from "../../Components/Home/InfoCard";
import AboutMentor from "../../Components/Home/AboutMentor";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-8 py-8">
      <h1 className="text-5xl font-semibold my-4 text-center">
        Smart Traffic Enforcement System (STES)
      </h1>
      <h2 className="text-xl text-center">
        Revolutionizing Traffic Regulation with AI-Powered Violation Detection
      </h2>
      <ModelsCarousel />
      <InfoCard />
      <Functions />
      <AboutMentor />
    </div>
  );
};

export default HomePage;
