import fire from "firebase";
import { firebaseConfigData } from "./config";

const firebaseConfig = firebaseConfigData;

const firebase = fire.initializeApp(firebaseConfig);

export default firebase;
