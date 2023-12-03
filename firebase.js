import { initializeApp } from "firebase/app";
import { collection, doc, getDocs, getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBl4XsrhFLI5nR3ct4wSXz-fBASlRs4dNg",
  authDomain: "space-tourism-f0f7a.firebaseapp.com",
  projectId: "space-tourism-f0f7a",
  storageBucket: "space-tourism-f0f7a.appspot.com",
  messagingSenderId: "827687347574",
  appId: "1:827687347574:web:568162aec1a3271042c657"
};

const firebaseApp = initializeApp(firebaseConfig);

const firestoreDB = getFirestore(firebaseApp);

export async function getData(col) {
  try {
    const querySnapshot = await getDocs(collection(firestoreDB, col));
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr;
  } catch (error) {
    throw error;
  }
}


// firebase for data storage to fetch images
const storage = getStorage();

export async function getImage(path) {
  const pathReference = ref(storage, path);
  const url = await getDownloadURL(pathReference)
  return url
}

