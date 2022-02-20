import React,{useEffect,useState} from 'react'
import { collection, onSnapshot, } from 'firebase/firestore';
import { db } from './firebase';
function TableBody() {
    const [table, setTable] = useState([]);
    useEffect(() => {
      onSnapshot(collection(db, "Table"), (snapshot) => {
        setTable(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })))
      });
    },[]);
  return (
      <>
          <div className="assignment__tabal">
    <table>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
                </tr>
                {
                    table.map(({ id, data }) => {
                   return   <tr key={id}>
                       <td>{ data.name}</td>
                       <td>{ data.secondname}</td>
                    </tr>
                    })
                }
    
   
  
              </table>
              </div>
  </>
  )
}

export default TableBody