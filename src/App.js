import './App.css';

import { BrowserRouter  as Router, Route,  Routes} from "react-router-dom";
import Custom from './Custom';
import NavPractice from './NavPractice';

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
    <Navigation/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/custom" element={<Custom />} />
        <Route path="/navpractice" element={<NavPractice/>} />
      </Routes>
    </Router>
  );
}

export default App;
