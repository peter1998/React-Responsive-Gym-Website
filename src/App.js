import "./App.css";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Hero/Programs/Programs";
import Reasons from "./components/Hero/Reasons/Reasons";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
    </div>
  );
}

export default App;
