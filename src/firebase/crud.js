import { projectFirestore } from './firebaseConfig'

collectionRef = projectFirestore.collection('notes');

const addNote = () => {
    // collectionRef.add()
    console.log("add note");
}


export { addNote }