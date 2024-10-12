import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonHeader,
    IonIcon,
    IonTitle,
    IonToolbar,
    useIonRouter
} from "@ionic/react";

import styles from "./PageHeader.module.css";
import {caretBack, codeOutline, personCircleOutline} from "ionicons/icons";
import {useEffect} from "react";

interface PageHeaderProps {
    title: string;
    large?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, large     }) => {
    const router = useIonRouter();

    useEffect(() => {
        console.log(router.routeInfo.prevRouteLastPathname)
    }, [router.routeInfo.prevRouteLastPathname]);

    return (
        <IonHeader className={styles.pageHeader} collapse={large ? "condense" : "undefined" as any}>
            <IonToolbar color="{#dedbb8}">
                {router.routeInfo.prevRouteLastPathname != "/sign-up" && (
                    <IonButtons slot="start">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                )}
                <IonTitle className="profile-title">
                    {title ? title : "LockedIn"}
                </IonTitle>
                <IonButtons slot="end">
                    <IonIcon size="large" icon={personCircleOutline}/>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    )
};

