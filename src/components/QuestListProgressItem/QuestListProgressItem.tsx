import {IonAvatar, IonIcon, IonItem, IonLabel, IonNote, useIonRouter} from "@ionic/react";
import {desktopOutline} from "ionicons/icons";

export interface QuestListProgressItemProps {
    icon: string;
    title: string;
    description: string;
    progressAmount: number;
    id: number;
}

export const QuestListProgressItem: React.FC<QuestListProgressItemProps> = (props) => {
    const { push } = useIonRouter();

    const navigateToQuest = () => {
        push(`/home/gain-experience/quest?id=${props.id}`);
    }

    return (
        <IonItem onClick={navigateToQuest} button lines="full">
            <IonAvatar slot="start">
                <IonIcon icon={props.icon} />
            </IonAvatar>
            <IonLabel>
                <h2>
                    {props.title}
                </h2>
                <p>
                    {props.description}
                </p>
            </IonLabel>
            <IonNote slot="end" color="primary">
                {props.progressAmount}%
            </IonNote>
        </IonItem>
    )
};