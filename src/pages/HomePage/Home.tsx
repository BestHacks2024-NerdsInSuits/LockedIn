import {
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs
} from '@ionic/react';

import styles from './Home.module.css';

import { Redirect, Route } from "react-router-dom";

import {
    barbellOutline,
    chatbubblesOutline,
    constructOutline, flashOutline, peopleCircleOutline
} from "ionicons/icons";

import GainExperiencePage from "../GainExperiencePage/GainExperiencePage";
import TalkWithMentorPage from "../TalkWithMentorPage/TalkWithMentorPage";
import FightBossesPage from "../FightBossesPage/FightBossesPage";
import QuestPage from "../QuestPage/QuestPage";
import CustomizePage from '../CustomizePage/CustomizePage';
import FriendsPage from '../Friends/FriendsPage';

export const HomePage: React.FC = () => {
  return (
      <IonTabs>
          <IonRouterOutlet>
              <Route path="/home/lifestyle" exact component={GainExperiencePage} />
              <Route path="/home/friends" exact component={FriendsPage} />
              <Route path="/home/gain-experience" exact component={GainExperiencePage} />
              <Redirect exact from="/home" to="/home/gain-experience" />
              <Route path="/home/talk-with-mentor" exact component={TalkWithMentorPage} />
              <Route path="/home/fight-bosses" exact component={FightBossesPage} />
              <Route path="/home/gain-experience/quest" exact component={QuestPage} />
              <Route path="/home/gain-experience/customize" exact component={CustomizePage} />
          </IonRouterOutlet>
          <IonTabBar className={styles.tabs} slot="bottom">
              <IonTabButton style={{"--background": "black !important"}} className={styles.tabButton} tab="lifestyle" href="/home/lifestyle">
                  <IonIcon icon={flashOutline} />
                  <IonLabel>Lifestyle</IonLabel>
              </IonTabButton>
              <IonTabButton style={{"--background": "black !important"}} className={styles.tabButton} tab="friends" href="/home/friends">
                  <IonIcon icon={peopleCircleOutline} />
                  <IonLabel>Friends</IonLabel>
              </IonTabButton>
              <IonTabButton style={{"--background": "black !important"}} className={styles.tabButton} tab="gain-experience" href="/home/gain-experience">
                  <IonIcon icon={barbellOutline} />
                  <IonLabel>Gain experience</IonLabel>
              </IonTabButton>
              <IonTabButton style={{"--background": "black !important"}} className={styles.tabButton} tab="talk-with-mentor" href="/home/talk-with-mentor">
                  <IonIcon icon={chatbubblesOutline} />
                  <IonLabel>Talk with mentor</IonLabel>
              </IonTabButton>
              <IonTabButton style={{"--background": "black !important"}} className={styles.tabButton} tab="fight-bosses" href="/home/fight-bosses">
                  <IonIcon icon={constructOutline} />
                  <IonLabel>Fight bosses</IonLabel>
              </IonTabButton>
          </IonTabBar>
      </IonTabs>
  );
};