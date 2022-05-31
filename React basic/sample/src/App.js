
import './App.css';
import Header from './component/Header';
// import Login from './component/Login';
import Top from './component/Top';

function App() {
  let name = "Divyanshu";
  return (
    <div className="App">
      <Top/>
      <Header text ={name}/>
       {/* <Login/> */}
       
    </div>
  );
}

export default App;
