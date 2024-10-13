import { brushOutline, clipboardOutline, codeOutline, desktopOutline, documentOutline, personAddOutline } from "ionicons/icons";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import {IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonNote, IonProgressBar, IonSegment, IonSegmentButton, IonTitle, IonToolbar} from "@ionic/react";
import styles from "./GainExperiencePage.module.css";
import { useState } from "react";
import {
    QuestListProgressItem,
    QuestListProgressItemProps
} from "../../components/QuestListProgressItem/QuestListProgressItem";

export const questListProgressItems: QuestListProgressItemProps[] = [
    {
        title: "BestHacks",
        description: "Is it working?",
        progressAmount: 100,
        icon: desktopOutline,
        id: 1
    },
    {
        title: "Python Course I",
        description: "Lesson 6 | Print Command",
        progressAmount: 75,
        icon: codeOutline,
        id: 2
    },
    {
        title: "Business Course",
        description: "Lesson 3 | Agile Management",
        progressAmount: 55,
        icon: clipboardOutline,
        id: 3
    },
    {
        title: "Java Course Advanced",
        description: "Lesson 1 | Introduction",
        progressAmount: 5,
        icon: documentOutline,
        id: 4
    }
];

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
                        <IonButton className={styles.customizeCharacterButton} fill="clear" href="/home/gain-experience/customize">
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
                        {questListProgressItems.map((questListProgressItem, index) => (
                            <QuestListProgressItem
                                key={index}
                                title={questListProgressItem.title}
                                description={questListProgressItem.description}
                                icon={questListProgressItem.icon}
                                progressAmount={questListProgressItem.progressAmount}
                                id={questListProgressItem.id}
                            />
                        ))}
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
