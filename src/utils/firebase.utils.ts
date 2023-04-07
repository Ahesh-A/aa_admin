
import { initializeApp } from "firebase/app";

import { getFirestore, query, getDocs, collection, setDoc, doc, DocumentData } from "firebase/firestore"
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB1t5ShuwhX3kMfvnp1-GQfbnbZLAv-sik",
  authDomain: "aa-appraels.firebaseapp.com",
  projectId: "aa-appraels",
  storageBucket: "aa-appraels.appspot.com",
  messagingSenderId: "125888504129",
  appId: "1:125888504129:web:b7a145794270c858c241c0",
  measurementId: "G-DJ9CKBFJBV",
};

// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMIAN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.API_KEY,
//   measurementId: process.env.MEASUREMENT_ID,
// };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//const auth1 = getAuth(app);

// if (firebase.initializeApp()) {
//   firebase.initializeApp({});
// }
// Initialize Firebase

// const app = initializeApp(firebaseConfig);

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


// export const insertItemsToDeliver = async (item: any) => {
//   const { user, cartItems } = item;
//   // const prodId = cartItems.reduce((acc, item) => acc + item.id, "");
//   const deliverId = `${Date.now()}${user.uid}`;
//   console.log("Deliver ID :", deliverId);
//   // console.log(user.uid + prodId);
//   await setDoc(doc(db, "Items_to_deliver", user.uid), {
//     ...user,
//     cartItems,
//     deliverId,
//   });
// };
