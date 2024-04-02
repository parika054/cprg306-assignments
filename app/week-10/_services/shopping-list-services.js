import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";
async function getItems(userId) {
    const items = [];
    const itemsQuery = query(collection(db, `users/${userId}/items`));
    const querySnapshot = await getDocs(itemsQuery);
    querySnapshot.forEach((doc) => {
        items.push(doc.data());
    });
    return items;
}

async function addItem(userId, item) {
    const itemsCollectionRef = collection(db, `users/${userId}/items`);
    const docRef = await addDoc(itemsCollectionRef, item);
    return docRef.id;
}

export { getItems, addItem };