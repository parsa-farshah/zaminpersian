import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Services from "./components/Services";
import Work from "./components/Work";
import Form from "./components/Form";
import Question from "./components/Question";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center px-4 md:px-[90px] xl:px-[357px]">
        <Navbar />
        <Header />
        <Work />
        <AboutUs />
        <Services />
        <Price />
        <Form />
        <Question />
      </div>
      <Footer />
    </div>
  );
}
