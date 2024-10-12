import { clipboardOutline, codeOutline, desktopOutline, documentOutline } from "ionicons/icons";
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
                    <h2 className={styles.profileName}>Patryk</h2>
                    <p className={styles.profileLevel}>Lvl. 3</p>

                    {/* Progress Bar Container with text on both sides */}
                    <div className={styles.progressContainer}>
                    <span className={styles.progressLabelLeft}>Level:</span>
                    <IonProgressBar value={0.23} className={styles.progressBar}></IonProgressBar> {/* Green progress bar */}
                    <span className={styles.progressLabelRight}>23%</span>
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

                {/* Placeholder content for Quest tab */}
                {selectedSegment === 'quest' && (
                    <div className={styles.questSection}>
                    <h2>Quest Content</h2>
                    <p>Details about the current quests and challenges would go here.</p>
                    </div>
                )}
                </IonContent>
        </PageWrapper>
    );
};

export default GainExperiencePage;
