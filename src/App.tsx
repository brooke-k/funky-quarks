/**
 * File: main-page.tsx
 * @author Brooke Kindleman (brooke.kindleman@gmail.com)
 * Date: 15/Jan/2022
 *
 */

import * as React from "react";
import "./theme/models.scss";
import { Header } from "./components/Header";
import { MemoryRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Unicorns from "./pages/Unicorns";
import { Footer } from "./components/Footer";
import Movement from "./pages/Movement";
import { ContainerBox } from "./components/ContainerBox";
const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header /> <Footer />
        <div>
          <nav className="navBar">
            <ul className="navBar list">
              <button>
                <Link to="/home">Home</Link>
              </button>
              <button>
                <Link to="/unicorns">Unicorns</Link>
              </button>
              <button>
                <Link to="/movement">Movement</Link>
              </button>
            </ul>
          </nav>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/unicorns" element={<Unicorns />}></Route>
            <Route path="/movement" element={<Movement />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
