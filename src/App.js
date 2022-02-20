
import './App.css';
import Table from './Table';
import Number from './Number';
function App() {
  return (
    <div className="App">
      <div className="assignment__tabal">
        <h1>Add String into Table</h1>
 <Table/>

      </div>
      <div className="title__middel">
   <h1><span>A</span>ssignment</h1> <h6><span>by</span></h6><h2><span>Vikas Kumar</span></h2> 
      </div>
      <div className="assignment__number">
      <h1>Number Assignment</h1>
        <Number/>
      </div>
    </div>
  );
}

export default App;
