
import { initializeApp } from "firebase/app";

import { getFirestore, query, getDocs, collection, setDoc, doc, DocumentData } from "firebase/firestore"

import { User, getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1t5ShuwhX3kMfvnp1-GQfbnbZLAv-sik",
  authDomain: "aa-appraels.firebaseapp.com",
  projectId: "aa-appraels",
  storageBucket: "aa-appraels.appspot.com",
  messagingSenderId: "125888504129",
  appId: "1:125888504129:web:b7a145794270c858c241c0",
  measurementId: "G-DJ9CKBFJBV",
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const auth = getAuth(app);

//

export const getProdInfo = async (): Promise<DocumentData[]> => {
  const docRef = collection(db, "prod_info");
  const q = query(docRef);
  const docSnap = await getDocs(q);
  return docSnap.docs.map((doc) => doc.data());
};

export const getData = async () => {
  try {
    const docRef = collection(db, "d_products");
    const q = query(docRef);
    const querySnapShot = await getDocs(q);
    return querySnapShot.docs.map((doc) => doc.data());
  } catch (error) {
    alert(error);
  }
};

export const getUsers = async () => {
  const docRef = collection(db, "users");
  const q = query(docRef);
  const querySnapShot = await getDocs(q);
  return querySnapShot.docs.map((doc) => doc.data());
};

// export const updateUser = async (uid: string, data: {}) => {
//   const users = await getUsers();
//   const res = Object.values(users).find((user) => user.uid === uid);
//   await setDoc(doc(db, "users", uid), { ...res, ...data });
// };





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

export const getCurrentUser = (): Promise<User | null> => {
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

export type AdditionalData = {
  displayName?: string
}

export const getCartProducts = async () => {
  const docRef = collection(db, "prod_info");
  const q = query(docRef);
  const querySnapShot = await getDocs(q);
  return querySnapShot.docs.map((doc) => doc.data());
}

export const getItemsToDeliver = async () => {
  const docRef = collection(db, "Items_to_deliver");
  const q = query(docRef);
  const querySnapShot = await getDocs(q);
  return querySnapShot.docs.map((doc) => doc.data());
}

