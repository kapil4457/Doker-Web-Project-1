import Header from "./components/Header.jsx"
import {Route , Routes} from "react-router-dom"
import "./App.css"
function App() {
  return (
    <Routes>
      <Route exact path="/">

    <Header />
      </Route>
    </Routes>
   );
}

export default App;
