import { FirebaseApp } from "@/firebaseConfig";
import { getAuth } from "firebase/auth";

export const auth = getAuth(FirebaseApp);
