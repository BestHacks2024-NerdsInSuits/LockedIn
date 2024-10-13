import { IonContent, IonPage } from '@ionic/react';
import styles from './PageWrapper.module.css';
import { PageHeader } from '../PageHeader/PageHeader';

interface PageWrapperProps {
  headerName?: string;
  backButton?: boolean;
}

export const PageWrapper: React.FC<React.PropsWithChildren<PageWrapperProps>> = ({ headerName, children, backButton }) => {
  return (
    <IonPage>
      {headerName && <PageHeader backButton={backButton} title={headerName} />}
      <IonContent className={styles.pageWrapper}>
        {children}
      </IonContent>
    </IonPage>
  );
};
