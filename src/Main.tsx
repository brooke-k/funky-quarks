/**
 * File: main-page.tsx
 * @author Brooke Kindleman (brooke.kindleman@gmail.com)
 * Date: 15/Jan/2022
 *
 */

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Component } from "react";

import "./theme/variables.scss";
import { Header } from "./components/header";
import { MemoryRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Unicorns from "./pages/Unicorns";
const MainApp: React.FC = () => {
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
            </ul>
          </nav>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/unicorns" element={<Unicorns />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

/* export const Main = () => {
  return (
    <IonContent color="red">
      <IonHeader>
        <IonTitle>Ahoy Bitches</IonTitle>
      </IonHeader>
    </IonContent>
  );
}; */
export default MainApp;
