import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, } from '@ionic/react';
import './Home.css';
import '../theme/style.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div className="wrapper">
          <IonCard>
            <h2 className="ion-padding bio">Rullyan Reva P - 30659</h2>
            <IonButton expand="block" routerLink="/bmi">BMI Calculator</IonButton>
            <div className="h-05"></div>
            <IonButton expand="block" routerLink="/bmr">BMR Calculator</IonButton>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
