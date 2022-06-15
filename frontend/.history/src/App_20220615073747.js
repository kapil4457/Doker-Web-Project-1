import Header from "./components/Header.jsx"
import Home from "./components/Home.jsx"
import {Route , Routes , BrowserRouter} from "react-router-dom"
import "./App.css"
function App() {
  return (
    <BrowserRouter>
    <Header />
      {/* <Route exact path="/" element={<Home />}/> */}

   
    </BrowserRouter>
   );
}

export default App;
