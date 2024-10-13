import React from 'react';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonNote,
} from '@ionic/react';
import styles from './Friends.module.css';
import { PageWrapper } from '../../components/PageWrapper/PageWrapper';

const FriendsPage: React.FC = () => {
  const friends = [
    { id: 1, name: 'Patryk Miśiak', level: 5, achievement: 'Completed Best Hacks 2024', imgSrc: 'assets/img/friend1.png' },
    { id: 2, name: 'Oskar Kaptacz', level: 7, achievement: 'Top Scorer in Web Development', imgSrc: 'assets/img/friend2.png' },
    { id: 3, name: 'Jakub Cywka', level: 3, achievement: 'Finished JavaScript Basics', imgSrc: 'assets/img/friend3.png' },
    { id: 4, name: 'Dariusz Mirończuk', level: 10, achievement: 'AI Expert Certification', imgSrc: 'assets/img/friend4.png' },
  ];

  return (
    <PageWrapper headerName={"Friends List"}>
    <IonContent>
      <IonList className={styles.friendList}>
        {friends.map((friend) => (
          <IonItem key={friend.id} className={styles.friendItem}>
            <IonAvatar slot="start" className={styles.friendAvatar}>
              <img src={friend.imgSrc} alt={friend.name} />
            </IonAvatar>
            <IonLabel className={styles.friendLabel}>
              <h2>{friend.name}</h2>
              <p>Level: {friend.level}</p>
              <p>Best Achievement: {friend.achievement}</p>
            </IonLabel>
            <IonNote slot="end" className={styles.levelNote}>
              Lvl {friend.level}
            </IonNote>
          </IonItem>
        ))}
      </IonList>
    </IonContent>
    </PageWrapper>
  );
};

export default FriendsPage;
