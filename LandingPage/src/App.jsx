import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import SignUP from "./SignUP";
import Features from "./Features";
import Body from "./Body";
import Feadback from "./FeadBack";
import Footer from "./Footer";
function App() {
  

  return (
    <>  
    <Header/>
    <SignUP Heading="Generate more leads with a professional landing page!" />
    <Features/>
    <Body/>
    <Feadback/>
    <SignUP Heading="Ready to get started? Sign up now!"/>
    <Footer/>
    </>
  )
}

export default App
