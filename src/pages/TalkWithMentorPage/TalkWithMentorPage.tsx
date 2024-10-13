import { PageWrapper } from "../../components/PageWrapper/PageWrapper";

import React from 'react';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import styles from './TalkWithMentorPage.module.css';

const TalkWithMentorPage: React.FC = () => {
  const mentors = [
    {
      id: 1,
      name: 'Mentor Alex',
      role: 'Strategy & Leadership',
      analysis: 'Focus on improving your leadership and strategic thinking skills to excel in your career.',
      imgSrc: 'assets/img/mentor1.png',
    },
    {
      id: 2,
      name: 'Mentor Bella',
      role: 'Creative Problem Solving',
      analysis: 'Expand your creativity by practicing unconventional problem-solving techniques.',
      imgSrc: 'assets/img/mentor2.png',
    },
    {
      id: 3,
      name: 'Mentor Cyrus',
      role: 'Data Analytics',
      analysis: 'Deepen your knowledge of data-driven decision-making to become an expert in analytics.',
      imgSrc: 'assets/img/mentor3.png',
    },
    {
      id: 4,
      name: 'Mentor Diana',
      role: 'Emotional Intelligence',
      analysis: 'Work on enhancing emotional intelligence to improve interpersonal relationships.',
      imgSrc: 'assets/img/mentor4.png',
    },
  ];

  return (
    <PageWrapper headerName={"Mentor Recommendations"}>
        <IonContent>
        <IonGrid className={styles.mentorGrid}>
            <IonRow>
            {mentors.map((mentor) => (
                <IonCol size="12" sizeMd="6" key={mentor.id}>
                <IonCard className={styles.mentorCard}>
                    <IonImg src={mentor.imgSrc} alt={mentor.name} className={styles.mentorImage} />
                    <IonCardHeader>
                    <IonCardTitle>{mentor.name}</IonCardTitle>
                    <IonCardSubtitle>{mentor.role}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                    <p>{mentor.analysis}</p>
                    <IonButton color="primary" fill="outline" className={styles.moreInfoButton}>
                        More Info
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

export default TalkWithMentorPage;
