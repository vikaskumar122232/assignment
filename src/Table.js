import React, { useState } from 'react';
import { db } from './firebase';
import {addDoc,collection,serverTimestamp} from 'firebase/firestore';
import TableBody from './TableBody';
import './App.css';
function Table() {
    const [name, setName] = useState("");
    const [secondname, setSecondName] = useState("");
    const fromSubmit = (e) => {
        e.preventDefault();
        if (name === "") {
            return alert("to is required");
        }
        if (secondname === "") {
            return alert("subject is required");
        }
   addDoc(collection(db, "Table"), {
            name: name,
            secondname: secondname,
            createAt:serverTimestamp()
      }); 
        
        
        alert("add data in table");
       
        setName("");
        setSecondName("");
    };
    
  
  return (
    
      <>
          <div className="input__textarea">
          <form onSubmit={fromSubmit}>
             <h4>Fist-Name: <input type="text" value={name} placeholder="First Name" onChange={(e)=>setName(e.target.value)}/></h4> 
                  <h4>Last-Name: <input type="text" value={secondname} placeholder="Last Name" onChange={(e)=>setSecondName(e.target.value)} /></h4>
                  <button type="submit">Add to table</button>
                  </form>
      </div>
          <h2>Table</h2>
          <TableBody/>
</>
  )
}

export default Table