import {IonButton, IonButtons, IonHeader, IonTitle, IonToolbar} from "@ionic/react";

import styles from "./PageHeader.module.css";

interface PageHeaderProps {
    title: string;
    large?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, large     }) => (
    <IonHeader className={styles.pageHeader} collapse={large ? "condense" : "undefined" as any}>
        <IonToolbar color="primary">
            <IonButtons slot="start">
                <IonButton>
                Settings
                </IonButton>
            </IonButtons>
            <IonTitle className="profile-title">LOCKEDIN</IonTitle>
            <IonButtons slot="end">
                <IonButton href="/">
                Logout
                </IonButton>
            </IonButtons>
            </IonToolbar>
    </IonHeader>    
);

