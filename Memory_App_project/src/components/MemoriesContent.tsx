import React from "react";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  isPlatform,
  IonFab,
  IonFabButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { Memory } from "../data/memories-context";
import MemoriesList from "../components/MemoriesList";
import { add } from "ionicons/icons";
const MemoriesContent: React.FC<{title: string; fallbackText: string; memories: Memory[]}> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
  <IonTitle>{props.title}</IonTitle>
          {isPlatform("ios") && (
            <IonButtons slot="end">
              <IonButton routerLink="/new-memory">
                <IonIcon icon={add} slot="icon-only" />
              </IonButton>
            </IonButtons>
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {props.memories.length === 0 && (
            <IonRow>
              <IonCol className="ion-text-center">
          <h2>{props.fallbackText}</h2>
              </IonCol>
            </IonRow>
          )}
          <MemoriesList items={props.memories} />
        </IonGrid>
        {!isPlatform("ios") && (
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton routerLink="/new-memory">
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
        )}
      </IonContent>
    </IonPage>
  );
};

export default MemoriesContent;
