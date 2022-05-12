import { FirebaseApp, initializeApp } from "firebase/app";
import { collection, CollectionReference, Firestore, getFirestore } from "firebase/firestore";

import firebaseConfig from "./firebaseConfig";

const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);

export const db: Firestore = getFirestore(firebaseApp);

export const roomsCollection: CollectionReference  = collection(db, 'rooms');
export const resultsCollection: CollectionReference  = collection(db, 'results');