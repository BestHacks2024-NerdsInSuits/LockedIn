import {
    bookOutline,
    checkmarkCircleOutline,
    clipboardOutline, closeOutline,
    codeOutline,
    desktopOutline,
    documentOutline, lockClosedOutline,
    starOutline, umbrellaOutline
} from "ionicons/icons";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import {
    IonAvatar,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList, IonModal,
    IonNote,
    IonProgressBar,
    IonSegment,
    IonSegmentButton, IonText,
    IonTitle,
    IonToolbar,
    useIonRouter
} from "@ionic/react";
import styles from "./CoursePage.module.css";
import { useState } from "react";
import {Quest} from "../../interfaces/Quest";
import {useLocation} from "react-router";
import {coursesListItems, questListProgressItems} from "../GainExperiencePage/GainExperiencePage";
import chest from "../../images/chest.png"
import {Course} from "../../interfaces/Course";

const CoursePage: React.FC = () => {
    const router = useIonRouter();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const courseId = searchParams.get('id') as unknown as string;
    const course = coursesListItems.find((course) => course.id === courseId);
    const remappedQuest: Course = {
        displayTitle: course?.displayTitle as unknown as string,
        description: course?.description as unknown as string,
        id: course?.id.toString() as unknown as string
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    return (
        <PageWrapper backButton headerName={remappedQuest.displayTitle}>
            <IonContent>
                <IonModal isOpen={isModalOpen}>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Details</IonTitle>
                            <IonButtons slot="start">
                                <IonButton onClick={() => setIsModalOpen(false)}>
                                    <IonIcon icon={closeOutline} />
                                </IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>

                    {/* Modal Content */}
                    <IonContent
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                        }}
                        className="ion-padding"
                    >
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                flexGrow: 1, // Ensures the content expands to fill the available space
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between", // Pushes the button to the bottom
                                alignItems: "center",
                            }}
                        >
                            <p>This is the content of the modal.</p>

                            <IonButton
                                style={{ alignSelf: "center", marginTop: "auto", marginBottom: "32px", width: "100%" }} // Aligns the button at the bottom center
                                onClick={() => setIsModalOpen(false)}
                                color="success"
                                expand="full"
                            >
                                Done
                            </IonButton>
                        </div>
                    </IonContent>

                </IonModal>
                <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}} className={styles.pathContainer}>
                    {/* First Step */}
                    <div onClick={openModal} className={styles.step}>
                        <div className={`${styles.dot} ${styles.complete}`}>
                            <IonIcon icon={umbrellaOutline}/>
                            <div className={styles.levelIndicator}>1</div>
                        </div>
                        <div className={styles.connector}></div>
                    </div>

                    {/* Second Step */}
                    <div onClick={openModal} className={styles.step}>
                        <div className={`${styles.dot} ${styles.complete}`}>
                            <IonIcon icon={umbrellaOutline}/>
                            <div className={styles.levelIndicator}>2</div>
                        </div>
                        <div className={styles.connector}></div>
                    </div>

                    {/* Third Step (locked) */}
                    <div onClick={openModal} className={styles.step}>
                        <div className={`${styles.dot} ${styles.complete}`}>
                            <IonIcon icon={bookOutline}/>
                        </div>
                        <div className={styles.connector}></div>
                    </div>

                    {/* Chest (reward) */}
                    <div onClick={openModal} className={styles.step}>
                        <div className={`${styles.dot} ${styles.chest}`}>
                            <div className={styles.chestIcon}>
                                <img src={chest} alt="chest"/>
                            </div>
                        </div>
                        <div className={styles.connector}></div>
                    </div>

                    {/* Fourth Step */}
                    <div onClick={openModal} className={styles.step}>
                        <div className={`${styles.dot} ${styles.inProgress}`}>
                            <IonIcon icon={umbrellaOutline}/>
                            <div className={styles.levelIndicator}>3</div>
                        </div>
                    </div>
                </div>
            </IonContent>
        </PageWrapper>
    );
};

export default CoursePage;