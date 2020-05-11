import React ,{ useState } from "react";
//import firebase from 'firebase/app';
import app from "./base.js";
//import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { render } from "react-dom";
import { storage } from "./base.js";


//import { render } from "@testing-library/react";
//import FileUploader from 'react-firebase-file-uploader'
//import firebase from './base'



 const Home  = () => {


  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
          });
      }
    );
  };

  console.log("image: ", image);



 
  
    
    return (
    <div>
        <progress value={progress} max="100" />
      <br />
      <br />
     <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}className="btn pink lighten-1 z-depth-0">Upload</button>
      <br />
      <p>  Apres de choisir un fichier et de l'uploader , un lien de partage sera génére automatiquement :     </p>
      <br />
      {url}
      <br />
      <img src={url || "http://via.placeholder.com/300"} alt="firebase-ige" />
      <br />
      <br />
      <br />
      
      <button onClick={() => app.auth().signOut()} className="btn pink lighten-1 z-depth-0">Sign out</button>
   </div>

   
    
  )
}

render(<Home />, document.querySelector("#root"));
export default Home ;