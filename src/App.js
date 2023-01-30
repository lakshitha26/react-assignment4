import image from './logo192.png'
import './App.css';

function Navbar() {
  return (<>
    <div>
    <center>
      <nav className="navbar"><h4>Try out a preview of the new React Docs!</h4></nav></center>
  </div>
  <div className="navbar_2">
    <div className='react'>
      <img src={image} style={{height:"35px",padding:"15px",}}/>
      <div className="React">React</div>
    </div>
  <div className="nav-elements" >
            <a href="/" className="a_1">Docs</a>
            <a href="/" className="a_1">tutorial</a>
            <a href="/" className="a_1">blog</a>
            <a href="/" className="a_1">community</a>
            <a href="/" className="a_1" style={{fontSize:"medium",paddingLeft:"200px",}}>v 18.2.0</a>
            <a href="/" className="a_1" style={{fontSize:"medium",}}>languages</a>
            <a href="/" className="a_1" style={{fontSize:"medium",}}>Github</a>
  </div>
  </div>
  </>
  );
}
function Intro(){
  return(
    <div style={{backgroundColor:"#282c34",color:"white",}} >
      <div style={{padding:"60px 70px",height:"400px"}}>
        <center>
        <h1 style={{color:"#61dafb",margin:"0",fontSize:"45px",}}>React</h1>
        <p style={{fontSize:"24px",fontweight:"200",padding:"15px",}}>A JavaScript library for building user interfaces</p><br></br>
        <div>
          <a style={{display:"inline-block",backgroundColor:"#61dafb",fontSize:"20px",color:"black",padding:"10px 25px",}}>get started</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a style={{display:"inline-block",color:"#61dafb",fontSize:"21px",padding:"10px 25px",}}>take this tutorial></a>
        </div>
        </center>
      </div>
    </div>
  );
}
function Features(){
  return(<>
    <div style={{width:"100%"}}>
    <div style={{align:"center",display:'flex',float:"left",padding:"5px",margin:"5% 4% 4% 5%",}}>
      <div className="card-container" style={{margin:"1% 3% 3% 3%",border:"3px",width:"400px",height:"400px",fontSize:"22px"}}>
          <div className="card-title">
             <p style={{color:"grey",fontSize:"28px"}}>Declarative</p>
             
          </div>
          <div className="card-body">
             <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, 
              and React will efficiently update and render just the right components when your data changes.<br></br>
              <br></br>
              Declarative views make your code more predictable and easier to debug..</p> 
          </div>
          </div>
          <div className="card-container" style={{margin:"1% 3% 3% 3%",border:"3px",width:"500px",height:"400px",fontSize:"22px"}}>
          <div className="card-title">
          <p style={{color:"grey",fontSize:"28px"}}>Component Based</p>
             
          </div>
          <div className="card-body">
             <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.<br></br>
             <br></br>
              Since component logic is written in JavaScript instead of templates, you can easily pass rich data 
              through your app and keep state out of the DOM.</p> 
          </div>
          </div>
          <div className="card-container" style={{margin:"1% 3% 3% 3%",border:"3px",width:"500px",height:"400px",fontSize:"22px"}}>
          <div className="card-title">
          <p style={{color:"grey",fontSize:"28px"}}>learn once,write anywhere</p>
             
          </div>
          <div className="card-body">
             <p>We don’t make assumptions about the rest of your technology stack, so you can develop new features in
               React without rewriting existing code.<br></br><br></br>React can also render on the server using Node and power mobile 
               apps using React Native.</p> 
          </div>
          </div>
          </div>
          </div>
        </>
  );
}
export {Navbar,Intro,Features};
