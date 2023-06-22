import "./app.scss"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComponentPage from "./Components/ComponentPage/ComponentPage"
import Slider from "./Components/Slider/Slider"
import datas from "./datas/components.json"
// import ComponentChild from "./Components/ComponentParent/ComponentChild/ComponentChild"
import Caroussel1 from "./Components/Caroussel/Caroussel1/Caroussel1"
import { useState, createContext, React } from "react"
import Formulaire1 from "./Components/Formulaire/Formulaire1/Formulaire1"
import Formulaire2 from "./Components/Formulaire/Formulaire2/Formulaire2"
import NavBar from "./Components/NavBar/NavBar"

//je n'arrive pas à remplacer dynamiquement les coponents avec la variable valueContent

// export const DynamicComponent = ({ is, useDefaultPath = true, ...rest }) => {
//   return React.createElement(
//     useDefaultPath ? require(`./${is}.js`).default : is,
//     {
//       ...rest,
//     }
//   );
// };

export const GetComponent = createContext()


function App() {

    const [valueComponent, setValueComponent] = useState("")
  
  console.log("value",valueComponent)

    
  return (
    <GetComponent.Provider value={[valueComponent, setValueComponent]}>
      <Router>
        <Routes>
          <Route path= "/" element= {<Home />} />

          <Route path="/component/:title" element={<ComponentPage datas={datas}/>} />
          {/* <Route path="/component/:title/:id" element={<Caroussel1 datas={datas}/>} /> */}
          <Route path="/component/formulaire/1" element={<Formulaire1 />} />
          <Route path="/component/formulaire/2" element={<Formulaire2 />} />


          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </GetComponent.Provider>
  );
}

export default App;

