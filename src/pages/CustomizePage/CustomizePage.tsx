import React from 'react';
import { IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonImg, IonButton } from '@ionic/react';
import styles from './Customize.module.css';
import { PageWrapper } from '../../components/PageWrapper/PageWrapper';

const CustomizePage: React.FC = () => {
  // Sample data for customization options
  const customizationOptions = [
    { id: 1, imgSrc: 'assets/img/avatar1.png', label: 'BestHacks T-Shirt' },
    { id: 2, imgSrc: 'assets/img/character2.png', label: 'Character 2' },
    { id: 3, imgSrc: 'assets/img/character3.png', label: 'Character 3' },
    { id: 4, imgSrc: 'assets/img/character4.png', label: 'Character 4' },
    { id: 5, imgSrc: 'assets/img/character5.png', label: 'Character 5' },
    { id: 6, imgSrc: 'assets/img/character6.png', label: 'Character 6' },
  ];

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
                        <IonButton fill="outline" color="primary" size="small">
                            Select
                        </IonButton>
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
