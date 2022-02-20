import React, { useState } from 'react';
function Number() {
  const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);
  const [addbutton, setAddButton] = useState(false);
  const [sub, setSub] = useState(false);
  const [multiply, setMultiply] = useState(false);
  const [divition, setDivition] = useState(false);
  function getData(e) {
    setNumber1(e.target.value)
    setAddButton(false)
    setDivition(false)
    setMultiply(false)
    setSub(false)
  };
  function setData2(e) {
    setNumber2(e.target.value)
    setAddButton(false)
    setDivition(false)
    setMultiply(false)
    setSub(false)
  };
 
  
  
  return (
    <>
    <div className="text__areanumber">
      <h4>Number 1:<input type="text" value={null} placeholder='Number 1' onChange={getData} /></h4>
      <h4>Number 2:<input type="text" value={null} placeholder='Number 2' onChange={ setData2} /></h4>
    </div>
    <div className="btn__oprations">
     
        <button onClick={() => setAddButton(true)}>AddNumber</button>
          <button onClick={() => setSub(true)}>Subtract</button>
          <button onClick={() => setMultiply(true)}>Multiply</button>
          <button onClick={() => setDivition(true)}>Diviton</button>
     

    </div>
    <div>
      {addbutton ?
        <h1>{parseInt(number1) + parseInt(number2)}</h1>
        : null
      }
      {sub ?
        <h1>{parseInt(number1) - parseInt(number2)}</h1>
        : null
        }
        {multiply ?
        <h1>{parseInt(number1) * parseInt(number2)}</h1>
        : null 
        }
        {divition ?
        <h1>{parseFloat(number1) / parseFloat(number2)}</h1>
        : null
        }
     
    </div>


  </>
  )
}

export default Number;