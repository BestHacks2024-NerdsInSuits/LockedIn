import React, { useState } from 'react';
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
import { IonButton } from '@ionic/react'; // Import IonButton


const FriendsPage: React.FC = () => {
  const initialFriends = [
    { id: 1, name: 'Patryk Miśiak', level: 5, achievement: 'Completed Best Hacks 2024', imgSrc: 'assets/img/friend1.png' },
    { id: 2, name: 'Oskar Kaptacz', level: 7, achievement: 'Top Scorer in Web Development', imgSrc: 'assets/img/friend2.png' },
    { id: 3, name: 'Jakub Cywka', level: 3, achievement: 'Finished JavaScript Basics', imgSrc: 'assets/img/friend3.png' },
    { id: 4, name: 'Dariusz Mirończuk', level: 10, achievement: 'AI Expert Certification', imgSrc: 'assets/img/friend4.png' },
  ];
    // Initialize friends state with initialFriends
    const [friends, setFriends] = useState(initialFriends);

    // Function to add more friends
    const addMoreFriends = () => {
      const newFriends = [
        { id: 5, name: 'Tom Brady', level: 8, achievement: 'Completed Blockchain Basics', imgSrc: 'assets/img/friend5.png' },
        { id: 6, name: 'Lebron James', level: 9, achievement: 'Top in ML Challenges', imgSrc: 'assets/img/friend6.png' },
      ];
  
      // Append new friends to the existing friends list
      setFriends([...friends, ...newFriends]);
    };

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
        {/* Add More Button */}
        <div className={styles.buttonContainer}>
            <IonButton className={styles.IonButton} expand="block" onClick={addMoreFriends}>
                Add More
            </IonButton>
      </div>
    </IonContent>
    </PageWrapper>
  );
};

export default FriendsPage;
