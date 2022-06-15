import Header from "./components/Header.jsx"
import Home from "./components/Home.jsx"
import {Route , Routes , BrowserRouter} from "react-router-dom"
import "./App.css"
function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      {/* <Route exact path="/" element={<Home />}/> */}

   
    </Routes>
    </BrowserRouter>
   );
}

export default App;
