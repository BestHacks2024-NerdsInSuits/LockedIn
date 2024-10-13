import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { HomePage } from './pages/HomePage/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

import '@ionic/react/css/palettes/dark.always.css';
// /* import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import RegisterUserPage from "./pages/RegisterUserPage/RegisterUserPage";
import {Quest} from "./interfaces/Quest";
import QuestPage from "./pages/QuestPage/QuestPage";
import LoginUserPage from "./pages/LoginUserPage/LoginUserPage";

setupIonicReact();

const quest: Quest = {
    displayTitle: "Przebiegnij 5 km",
    content: "Przebiegnij 5 km w swojej okolicy",
    id: "10293232"
}

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
          <Route exact path="/sign-up" component={RegisterUserPage} />
          <Redirect exact from="/" to="/sign-up" />
          <Route exact path="/sign-in" component={LoginUserPage} />
          <Route path="/home" component={HomePage} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
