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
    IonImg, useIonRouter, IonText
} from '@ionic/react';

import styles from './LoginUserPage.module.css';

import character from "/assets/img/LockInLock.png";

import React, { useState } from "react";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {Link} from "react-router-dom";

const LoginUserPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { push } = useIonRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (email.length > 0 && password.length > 0) {
            push('/home');
        }
    };

    return (
        <PageWrapper>
            <div className={`${styles.registerField} ${styles.backgroundBlack}`}>
                <IonImg src={character} alt="character" className={styles.characterImage} />
                <form onSubmit={handleLogin} className={styles.registerForm}>
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
                        Not registered yet? Click <Link to="/sign-up">here</Link>
                    </IonText>
                    <IonButton color="{#dedbb8}" expand="block" type="submit" className={`${styles.width100} ${styles.registerButton}`}>
                        Login
                    </IonButton>
                </form>
            </div>
        </PageWrapper>
    );
};

export default LoginUserPage;
