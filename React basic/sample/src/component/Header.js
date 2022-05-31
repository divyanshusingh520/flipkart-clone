import '../App.css';
// import htmlimg from '../images/download.png'
function Header(props)
{
    console.log(props)
    return (
        <div className="header">
         <img src= {htmlimg} alt =''/>
         <div className = "inner">
         <div className = "sign">
            <div className="login"><br></br>
            <div className = "myclass">
               <div className = "main">
              <div className = "internal">Login To your Account</div>  
              </div>
           <div className = "form">
               <div className = "innerform">
            <label for =" ">Enter username</label><br></br>
            <input type="text"></input><br></br>
            <label for =" ">Enter password {props.text}</label><br></br>
            <input type="text"></input><br></br>
            
            </div>
            </div>
            <div className = "sign">
            <div className = "button">
            <button className="enter">Sign in </button>
            </div>
            </div>
            </div>
            </div>
            </div>
        
         </div>
        
          

    
          
        </div>

    )  
}
export default Header;