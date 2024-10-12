import { IonIcon, IonLabel, IonTabButton } from "@ionic/react";

interface NavigationTabProps {
    title: string;
    href: string;
    icon: string;
}

export const NavigationTab: React.FC<NavigationTabProps> = ({ title, href, icon}) => (
    <IonTabButton tab={href} href={`/${href}`}>
        <IonIcon icon={icon} />
        <IonLabel>{title}</IonLabel>
    </IonTabButton>
);