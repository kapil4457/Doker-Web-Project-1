import Header from "./components/Header.jsx"
import {Route , Routes , BrowserRouter} from "react-router-dom"
import "./App.css"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/">

    <Header />
      </Route>
    </Routes>
    </BrowserRouter>
   );
}

export default App;
