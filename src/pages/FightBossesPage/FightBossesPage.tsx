import { PageWrapper } from "../../components/PageWrapper/PageWrapper";

import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonBadge,
} from '@ionic/react';
import { lockClosedOutline, trophyOutline } from 'ionicons/icons';
import styles from './FightBosses.module.css';

const FightBossesPage: React.FC = () => {
  // Sample data for courses and required levels
  const courses = [
    { id: 1, title: 'Web Development Basics', levelRequired: 1, description: 'Start your journey in web development!' },
    { id: 2, title: 'Python Programming', levelRequired: 2, description: 'Beginner to intermediate Python programming.' },
    { id: 3, title: 'Data Science Introduction', levelRequired: 5, description: 'Learn the basics of data analysis.' },
    { id: 4, title: 'Advanced AI Techniques', levelRequired: 10, description: 'Master artificial intelligence concepts.' },
  ];

  // Simulating user's current level (can be dynamic based on user)
  const userLevel = 3;

  return (
    <PageWrapper headerName="LockedIn">
        <IonContent>
        <IonHeader>
            <IonToolbar>
            <IonTitle>Boss Fight Courses</IonTitle>
            </IonToolbar>
        </IonHeader>

        <div className={styles.container}>
            {courses.map((course) => (
            <IonCard className={styles.courseCard} key={course.id}>
                <IonCardHeader>
                <IonCardTitle>{course.title}</IonCardTitle>
                <IonCardSubtitle>Level Required: {course.levelRequired}</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent className={styles.cardContent}>
                <p>{course.description}</p>
                
                {/* If user's level is lower than required level, show "locked" */}
                {userLevel < course.levelRequired ? (
                    <div className={styles.lockedContent}>
                    <IonIcon icon={lockClosedOutline} className={styles.lockIcon} />
                    <IonBadge color="danger" className={styles.lockBadge}>Locked</IonBadge>
                    <p>Reach Level {course.levelRequired} to unlock this course!</p>
                    </div>
                ) : (
                    <div className={styles.unlockedContent}>
                    <IonIcon icon={trophyOutline} className={styles.trophyIcon} />
                    <IonBadge color="success" className={styles.unlockBadge}>Unlocked</IonBadge>
                    <IonButton color="primary" fill="solid" size="small">Start Course</IonButton>
                    </div>
                )}
                </IonCardContent>
            </IonCard>
            ))}
        </div>
        </IonContent>
    </PageWrapper>
  );
};

export default FightBossesPage;