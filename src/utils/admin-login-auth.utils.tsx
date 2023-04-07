
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"
import { User, getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDiFPf7ZCRA3jwnwo1OZAiBn1SX9jvAww",
  authDomain: "aa-adimn.firebaseapp.com",
  projectId: "aa-adimn",
  storageBucket: "aa-adimn.appspot.com",
  messagingSenderId: "502322632446",
  appId: "1:502322632446:web:8ecfa3e651aa9c03fe77af"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

export const signIn = async (email: string, password: string): Promise<User | void> => {

      return await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          return user;
          // ...
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // export const createUser = (email: string, password: string): Promise<UserCredential> | void => {
    
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             // Signed in 
    //             const user = userCredential.user;
    //             console.log(user);
    //             // ...
    //         })
    //         .catch((error) => {
    //             alert(error);
    //         });
    // }
    
    export const onAuthStateChangedListener = (callBack: any) =>
      onAuthStateChanged(auth, callBack);
    
    export const googleSignOut = async () => {
      await signOut(auth)
        .then(() => {
          alert("signed out successfully");
        })
        .catch((error) => {
          alert(error);
        });
    };

    export const getCurrentUser = () => {
        return new Promise((resolve, reject) => {
          const unSubscribe = onAuthStateChanged(
            auth,
            (userAuth) => {
              unSubscribe();
              resolve(userAuth);
            },
            reject
          );
        });
      };
      