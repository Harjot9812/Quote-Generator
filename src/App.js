import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />
      <div className="container ">
        <div className="container my-3 text-center" id="card">
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
