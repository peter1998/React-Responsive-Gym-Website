import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Plans from "./components/Hero/Plans/Plans";
import Programs from "./components/Hero/Programs/Programs";
import Reasons from "./components/Hero/Reasons/Reasons";
import Join from "./components/Join/Join";
import Testimonials from "./components/Testimonials/Testimonials";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
