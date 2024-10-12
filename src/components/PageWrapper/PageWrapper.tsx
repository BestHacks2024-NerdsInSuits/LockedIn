import {
    IonButton,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar,
    IonImg, useIonRouter
} from '@ionic/react';

import styles from './PageWrapper.module.css';
import {PageHeader} from "../PageHeader/PageHeader";

interface PageWrapperProps {
    headerName?: string;
}

export const PageWrapper: React.FC<React.PropsWithChildren<PageWrapperProps>> = props => {
    return (
        <IonPage>
            {props?.headerName && (
                <PageHeader title={props.headerName} />
            )}
            <IonContent className={styles.pageWrapper}>
                {props?.headerName && (
                    <PageHeader large title={props.headerName} />
                )}
                {props.children}
            </IonContent>
        </IonPage>
    );
};