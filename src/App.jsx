import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Forms from "./components/Forms";
import "./App.css";

function App() {
  return (
    <div>
      <div className="sticky top-0">
        <Navbar />
      </div>

      <Content />
      <Forms />
    </div>
  );
}

export default App;
