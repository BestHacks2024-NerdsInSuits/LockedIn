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

import styles from './RegisterUserPage.module.css';

import character from "../../images/character.png";

import { useState } from "react";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";

const RegisterUserPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { push } = useIonRouter()

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();

        if (email.length > 0 && password.length > 0) {
            push('/home');
        }
    };

    return (
        <PageWrapper>
            <div className={`${styles.registerField} ${styles.backgroundBlack}`}>
                <IonImg src={character} alt="character" className={styles.characterImage} />
                <form onSubmit={handleRegister} className={styles.registerForm}>
                    <IonItem className={`${styles.registerFormItem} ${styles.ionBackgroundBlack}`}>
                        <IonInput
                            labelPlacement="floating"
                            label="Email"
                            placeholder="Your email address"
                            type="email"
                            value={email}
                            onIonChange={(e) => setEmail(e.detail.value!)}
                            required
                        />
                    </IonItem>
                    <IonItem className={`${styles.registerFormItem} ${styles.ionBackgroundBlack}`}>
                        <IonInput
                            labelPlacement="floating"
                            label="Password"
                            placeholder="********"
                            type="password"
                            value={password}
                            onIonChange={(e) => setPassword(e.detail.value!)}
                            required
                        />
                    </IonItem>
                    <IonButton color="primary" expand="block" type="submit" className={`${styles.width100} ${styles.registerButton}`}>
                        Register
                    </IonButton>
                </form>
            </div>
        </PageWrapper>
    );
};

export default RegisterUserPage;
