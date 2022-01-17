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
const MainApp: React.FC = () => {
  return <Header />;
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
