import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js"
import { app } from "./connectDB.js"


const dbRef = ref(getDatabase());

get(child(dbRef, `locations/${user}`)).then((snapshot) => {

  if (snapshot.exists()) {

    console.log(snapshot.val());

  } else {

    console.log("No data available");

  }
  
}).catch((error) => {

  console.error(error);

});
