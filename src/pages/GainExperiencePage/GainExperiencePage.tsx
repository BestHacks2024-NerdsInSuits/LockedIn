import { brushOutline, clipboardOutline, codeOutline, desktopOutline, documentOutline, personAddOutline } from "ionicons/icons";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import {IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonNote, IonProgressBar, IonSegment, IonSegmentButton, IonTitle, IonToolbar} from "@ionic/react";
import styles from "./GainExperiencePage.module.css";
import { useState } from "react";
  

const GainExperiencePage: React.FC = () => {
    // Add useState for handling the selected segment
    const [selectedSegment, setSelectedSegment] = useState<'quest' | 'progress'>('progress');
    return (
        <PageWrapper headerName="LockedIn">
            {/* Content */}
            <IonContent>
                {/* Profile Section */}
                <div className={styles.profileContainer}>
                    <img className={styles.avatar} src="assets/img/avatar1.png" alt="Profile" />
                    <div className={styles.nameLevelContainer}>
                        <h2 className={styles.profileName}>Patryk</h2>
                        <p className={styles.profileLevel}>Lvl. 3</p>
                    </div>
                {/* Profile Buttons */}
                    <div className={styles.profileButtonsContainer}>
                        <IonButton className={styles.findFriendButton} fill="clear">
                            <IonIcon icon={personAddOutline} slot="start" />
                            Find New Friend
                        </IonButton>
                        <IonButton className={styles.customizeCharacterButton} fill="clear">
                            <IonIcon icon={brushOutline} slot="start" />
                            Customize Character
                        </IonButton>
                    </div>
                </div>
                {/* Tab Buttons */}
                <IonSegment
                    value={selectedSegment}
                    color="primary"
                    onIonChange={(e) => setSelectedSegment(e.detail.value as 'quest' | 'progress')}
                >
                    <IonSegmentButton value="quest">
                    <IonLabel>Quest</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="progress">
                    <IonLabel>Progress</IonLabel>
                    </IonSegmentButton>
                </IonSegment>

                {/* Conditional Content based on selected segment */}
                {selectedSegment === 'progress' && (
                    <IonList className={styles.courseList}>
                    <IonItem lines="full">
                        <IonAvatar slot="start">
                        <IonIcon icon={desktopOutline} />
                        </IonAvatar>
                        <IonLabel>
                        <h2>BestHacks</h2>
                        <p>Is it working?</p>
                        </IonLabel>
                        <IonNote slot="end" color="primary">100%</IonNote>
                    </IonItem>

                    <IonItem lines="full">
                        <IonAvatar slot="start">
                        <IonIcon icon={codeOutline} />
                        </IonAvatar>
                        <IonLabel>
                        <h2>Python Course I</h2>
                        <p>Lesson 6 | Print Command</p>
                        </IonLabel>
                        <IonNote slot="end" color="primary">75%</IonNote>
                    </IonItem>

                    <IonItem lines="full">
                        <IonAvatar slot="start">
                        <IonIcon icon={clipboardOutline} />
                        </IonAvatar>
                        <IonLabel>
                        <h2>Business Course</h2>
                        <p>Lesson 3 | Agile Management</p>
                        </IonLabel>
                        <IonNote slot="end" color="primary">55%</IonNote>
                    </IonItem>

                    <IonItem lines="full">
                        <IonAvatar slot="start">
                        <IonIcon icon={documentOutline} />
                        </IonAvatar>
                        <IonLabel>
                        <h2>Java Course Advanced</h2>
                        <p>Lesson 1 | Introduction</p>
                        </IonLabel>
                        <IonNote slot="end" color="primary">5%</IonNote>
                    </IonItem>
                    </IonList>
                )}
                {/* Placeholder content for QuestPage tab */}
                {selectedSegment === 'quest' && (
                    <div className={styles.questSection}>
                        <h2>Suggested Courses</h2>
                        <div className={styles.suggestedCoursesContainer}>
                            <div className={styles.courseCard}>
                                <h3>Web Development Basics</h3>
                                <p>Learn HTML, CSS, and JavaScript fundamentals to build your first website.</p>
                                <IonButton fill="outline" color="primary" size="small">Start Course</IonButton>
                            </div>
                            <div className={styles.courseCard}>
                                <h3>Python Programming</h3>
                                <p>Dive into Python programming with beginner-friendly lessons and projects.</p>
                                <IonButton fill="outline" color="primary" size="small">Start Course</IonButton>
                            </div>
                            <div className={styles.courseCard}>
                                <h3>Data Science Introduction</h3>
                                <p>Get started with data analysis, statistics, and data visualization.</p>
                                <IonButton fill="outline" color="primary" size="small">Start Course</IonButton>
                            </div>
                        </div>
                    </div>
                )}
                </IonContent>
        </PageWrapper>
    );
};

export default GainExperiencePage;
