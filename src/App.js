import './App.css';
import React from 'react';
import Profile from './profile/Profile' ;
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Image from './profile/Image';

function App() {
  const info = {fullname:'Bouyahi Ali' ,
  bio:'I’m a freelance Tunisien web designer and developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript' ,
  profession:' Web Developer & Designer' ,
  img:'/avatar.png' }
                 

  const hello=(x) =>{
    alert(x={info: 'fullname'});}
  
  return (
   <div className="container">
         <Profile  info = {info} hello={hello}> <Image info={info} /> </Profile>      
         
 </div>
  );
  
}

export default App;
