import React from 'react';
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonImg,
  IonButton,
  IonIcon,
  IonBadge,
} from '@ionic/react';
import { lockClosedOutline } from 'ionicons/icons';
import styles from './Customize.module.css';
import { PageWrapper } from '../../components/PageWrapper/PageWrapper';

const CustomizePage: React.FC = () => {
  // Sample data for customization options, with required levels
  const customizationOptions = [
    { id: 1, imgSrc: 'assets/img/avatar1.png', label: 'BestHacks T-Shirt', requiredLevel: 1 },
    { id: 2, imgSrc: 'assets/img/avatar2.png', label: 'Hacks Chad', requiredLevel: 10 },
    { id: 3, imgSrc: 'assets/img/avatar3.png', label: 'Character 3', requiredLevel: 5 },
    { id: 4, imgSrc: 'assets/img/avatar4.png', label: 'Puma Chad', requiredLevel: 1 },
    { id: 5, imgSrc: 'assets/img/avatar5.png', label: 'Character 5', requiredLevel: 6 },
    { id: 6, imgSrc: 'assets/img/avatar6.png', label: 'Character 6', requiredLevel: 1 },
  ];

  // Simulating user's current level (can be dynamic)
  const userLevel = 3;

  return (
    <PageWrapper headerName="LockedIn">
      <IonContent>
        <h2 className={styles.pageTitle}>Customize Your Character</h2>
        <IonGrid>
          <IonRow>
            {customizationOptions.map((option) => (
              <IonCol size="6" sizeMd="4" key={option.id}>
                <IonCard className={styles.customizationCard}>
                  <IonImg src={option.imgSrc} className={styles.characterImage} />
                  <IonCardContent className={styles.cardContent}>
                    <h3>{option.label}</h3>

                    {/* Check if user's level is sufficient */}
                    {userLevel >= option.requiredLevel ? (
                      <IonButton fill="outline" color="primary" size="small">
                        Select
                      </IonButton>
                    ) : (
                      <div className={styles.lockedContent}>
                        <IonIcon icon={lockClosedOutline} className={styles.lockIcon} />
                        <IonBadge color="danger">Locked</IonBadge>
                        <p>Unlock at Level {option.requiredLevel}</p>
                      </div>
                    )}
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </PageWrapper>
  );
};

export default CustomizePage;
