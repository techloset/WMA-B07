import Header from "./components/header/Header"
import {Footer,userName} from "./components/footer/Footer"
import Button from "./components/button/Button"
import "./app.css"
import firstImage from "./assets/first.png"



function App() {
  console.log("userName",userName);
  let bgColor = "green"
  if (Math.random() > 0.5){
   bgColor = "red"
  }
  else {
    bgColor = "blue"
  }
  

  console.log("bgColor",bgColor)
  
  return (
      <>
      <Header/>
      <img style={{width: 200}} src={firstImage} alt="placeholder" />
      <br />
      <img style={{width: 200}} src={require("./assets/first.png")} alt="placeholder" />
      <h1 id="heading" style={{backgroundColor: bgColor}} >Hello World</h1>
      <img src="/logo512.png" />
      <img style={{width:200}} src="https://images.unsplash.com/photo-1723744895444-e94a0e1dd378?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Button color="black" title="App button" />
      <Footer color="blue" bg="red" data="any data"  username="naveed" />
     
      </>

  )
}


export default App;

