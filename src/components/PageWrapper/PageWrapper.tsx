import { IonContent, IonPage } from '@ionic/react';
import styles from './PageWrapper.module.css';
import { PageHeader } from '../PageHeader/PageHeader';

interface PageWrapperProps {
  headerName?: string;
}

export const PageWrapper: React.FC<React.PropsWithChildren<PageWrapperProps>> = ({ headerName, children }) => {
  return (
    <IonPage>
      {headerName && <PageHeader title={headerName} />}
      <IonContent className={styles.pageWrapper}>
        {children}
      </IonContent>
    </IonPage>
  );
};
