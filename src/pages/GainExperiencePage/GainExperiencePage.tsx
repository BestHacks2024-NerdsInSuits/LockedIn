import { clipboardOutline, codeOutline, desktopOutline, documentOutline } from "ionicons/icons";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import {IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonNote, IonSegment, IonSegmentButton, IonTitle, IonToolbar} from "@ionic/react";
import styles from "./GainExperiencePage.module.css";

const GainExperiencePage: React.FC = () => {
    return (
        <PageWrapper headerName="LockedIn">
            {/* Content */}
            <IonContent>

                {/* Profile Section */}
                <div className={styles.profileContainer}>
                <img className="avatar" src="assets/img/avatar1.png" alt="Profile"/>
                <h2 className="profile-name">Patryk</h2>
                <p className="profile-level">Lvl. 3</p>
                </div>

                {/* Tab Buttons */}
                <IonSegment value="progress" color="primary">
                <IonSegmentButton value="quest">
                    <IonLabel>Quest</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="progress">
                    <IonLabel>Progress</IonLabel>
                </IonSegmentButton>
                </IonSegment>

                {/* Course List */}
                <IonList className="course-list">
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

            </IonContent>
        </PageWrapper>
    );
};

export default GainExperiencePage;
