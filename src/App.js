import React , { useState, useEffect}   from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Home from "./home";
import PrivateRoute from "./PrivateRoute";
import SignIn from './SignIn' ;
import SignUp from './SignUp';
import { AuthProvider } from "./auth";
import {auth } from "./base"









function App() {
  const [idToken, setIdToken] = useState(null)


  useEffect(() => {
   
    auth.onAuthStateChanged(async nextUser => {
      console.log("currentUser changed to:", nextUser)

      if (auth.currentUser) {
        setIdToken(await auth.currentUser.getIdToken())
      } else {
        setIdToken(null)
      }
    })
  }, [])
 return (
    <AuthProvider>
    <BrowserRouter>
      <div className="App">
       <Navbar />
       <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
  <span className="card-title">Un hébergement de fichiers puissant dans le cloud ! </span>
          <p>Quel que soit le type de fichier ou de dossier que vous voulez sauvegarder (photos, vidéos, présentations PowerPoint ou fichiers de CAO volumineux), il sera stocké de façon sécurisée grâce aux solutions de stockage cloud de notre service.Une solution volontairement Open Source et offrant le meilleur rapport prix/performances du secteur .</p>
        </div>
        </div>
      </div> 
   

     
    <p>{auth.currentUser ? auth.currentUser.displayName + " is signed in" : ""}</p>





        <Switch>
           <PrivateRoute exact path="/" component={Home} />
           <Route path='/SignIn' component={SignIn} />
           <Route path='/signUP' component={SignUp} />
         
      
          
            
          </Switch> 
      </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
