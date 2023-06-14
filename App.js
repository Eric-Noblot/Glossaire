import "./app.scss"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Caroussel from "./Components/Caroussel/Caroussel"
import Slider from "./Components/Slider/Slider"
import datas from "./datas/components.json"

function App() {

  return (
    <Router>
      <Routes>
        <Route path= "/" element= {<Home />} />
        <Route path="/component/:title" element={<Caroussel datas={datas}/>} />
        <Route path= "/slider" element= {<Slider />}></Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>

  );
}

export default App;

