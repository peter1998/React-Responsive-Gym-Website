import "./App.css";
import Hero from "./components/Hero/Hero";
import Plans from "./components/Hero/Plans/Plans";
import Programs from "./components/Hero/Programs/Programs";
import Reasons from "./components/Hero/Reasons/Reasons";
import Testimonials from "./components/Testimonials/Testimonials";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
    </div>
  );
}

export default App;
