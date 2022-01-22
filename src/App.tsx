/**
 * File: main-page.tsx
 * @author Brooke Kindleman (brooke.kindleman@gmail.com)
 * Date: 15/Jan/2022
 *
 */

import * as React from "react";
import "./theme/App.scss";
import "./theme/variables.scss";
import { Header } from "./components/Header";
import { MemoryRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Unicorns from "./pages/Unicorns";
import { Footer } from "./components/Footer";
import Movement from "./pages/Movement";
const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header />
        <div>
          <nav className="navBar">
            <ul className="navBar list">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/unicorns">Unicorns</Link>
              </li>
              <li>
                <Link to="/movement">Movement</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/unicorns" element={<Unicorns />}></Route>
            <Route path="/movement" element={<Movement />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
