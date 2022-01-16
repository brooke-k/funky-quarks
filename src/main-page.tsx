/**
 * File: main-page.tsx
 * @author Brooke Kindleman (brooke.kindleman@gmail.com)
 * Date: 15/Jan/2022
 *
 */

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { IonApp, IonText } from "@ionic/react";

const App: React.FC = () => (
  <IonApp>
    <IonText>Ahoy, from React</IonText>
  </IonApp>
);

export default App;
