
import { projectFirestore ,timeStamp} from './firebaseConfig'

var collectionRef = projectFirestore.collection('notes');

const addNote = (title) => {
    console.log("title",title);
    // var data = 
    collectionRef.add({
        "title":title,
        "body":"",
        "updatedAt":timeStamp()
    }).then((ack)=>{
        console.log(ack);
        console.log("add note");    
    })
    
}


const deleteById = (id)=>{
    collectionRef.doc(id).delete().then(
        console.log("document deleted")
    )
}


const updateByid = (id,data,title) =>{
    console.log("id",id,"data",data,title);
    collectionRef.doc(id).update({
        "title":title,
        "body":data,
        "updatedAt":timeStamp()
    })
}
export { addNote ,deleteById ,updateByid}