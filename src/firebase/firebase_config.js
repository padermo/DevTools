import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, collection, doc, addDoc, getDoc, getDocs, setDoc, query, where, deleteDoc } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);

export const register = async(email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    console.log(res);
    const collectionRef = collection(db, "users");
    const docRef = doc(collectionRef, res.user.uid);
    localStorage.setItem("uid", res.user.uid)
    await setDoc(docRef, {email: email, password: password})
  } catch (error) {
    console.log(error);
  }
}

export const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password)
    localStorage.setItem("uid", res.user.uid)
  } catch (error) {
    console.log(error);
  }
}

export const addFavorite = async (card) => {
  try {
    const docRef = collection(db, "favorites");
    const res = await addDoc(docRef, card);
    return res
  } catch (error) {
    console.log(error)
  }
}

export const getFavorites = async (uid) => {
  const cards = [];
  try {
    const collectionRef = collection(db, "favorites");
    const q = query(collectionRef, where("uid", "==", uid));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc)=>{
      const card = {...doc.data()};
      cards.push(card)
    })

    return cards;
  } catch (error) {
    console.log(error);
  }
}

export const removeFavorite = async (id) => {
  try {
    const docRef = doc(db, "favorites", id);
    const res = await deleteDoc(docRef);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
}