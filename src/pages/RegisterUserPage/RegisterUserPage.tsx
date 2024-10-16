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
    IonImg, useIonRouter, IonText, IonNavLink
} from '@ionic/react';

import styles from './RegisterUserPage.module.css';

import character from "/assets/img/LockInLock.png";

import React, { useState } from "react";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {Link} from "react-router-dom";

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
                    <IonText className="ion-margin-top">
                        Already registered? Click <Link to="/sign-in">here</Link>
                    </IonText>
                    <IonButton color="{#dedbb8}" expand="block" type="submit" className={`${styles.width100} ${styles.registerButton}`}>
                        Register
                    </IonButton>
                </form>
            </div>
        </PageWrapper>
    );
};

export default RegisterUserPage;
