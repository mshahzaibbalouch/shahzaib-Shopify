import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import TopBar from "./Pages/components/TopBar";
import Footer from "./Pages/components/Footer";


import './Pages/components/Components.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navigationbar from "./Pages/components/Navigationbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Navigationbar />
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
