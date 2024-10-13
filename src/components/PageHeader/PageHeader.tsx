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
import {useLocation} from "react-router";

interface PageHeaderProps {
    title: string;
    large?: boolean;
    backButton?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, large, backButton }) => {
    const router = useIonRouter();
    const location = useLocation();

    useEffect(() => {
        console.log(router.routeInfo.prevRouteLastPathname)
    }, [router.routeInfo.prevRouteLastPathname]);

    return (
        <IonHeader className={styles.pageHeader} collapse={large ? "condense" : "undefined" as any}>
            <IonToolbar color="{#dedbb8}">
                {location.pathname != "/home/gain-experience" &&
                location.pathname != "/home/talk-with-mentor" &&
                location.pathname != "/home/fight-bosses" &&
                location.pathname != "/home/lifestyle" &&
                location.pathname != "/home/friends" && (
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