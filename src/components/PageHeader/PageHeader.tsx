import {IonHeader, IonTitle, IonToolbar} from "@ionic/react";

import styles from "./PageHeader.module.css";

interface PageHeaderProps {
    title: string;
    large?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, large     }) => (
    <IonHeader className={styles.pageHeader} collapse={large ? "condense" : "undefined" as any}>
        <IonToolbar className={styles.pageHeaderToolbar}>
            <IonTitle className={styles.pageHeaderTitle} size={large ? "large" : "undefined" as any}>{title}</IonTitle>
        </IonToolbar>
    </IonHeader>
);