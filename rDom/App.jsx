import Card from "./card"
import data from "./Data"
import FullStackDevelopmen from "./FullStackDevelopment"
import Career from "./Career"
import CyberSecurity from "./CyberSecurity"
import DataScience from "./DataScience"
import { Route,Routes } from "react-router-dom"
import {Navbar,Nav,Container} from "react-bootstrap"
function App(){ 
   
  

  return (
    <>   
         <Navbar bg="dark" variant="dark" expand="md" >
           <Container>
            <Navbar.Brand href="/">Blogs</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navebar-nav">
            <Nav>
               <Nav.Link href="/">All</Nav.Link>
               <Nav.Link href="/FullStackDevelopment">Full Stack Development</Nav.Link>
               <Nav.Link href="/Career">Career</Nav.Link>
               <Nav.Link href="/DataScience">DataScience</Nav.Link>
               <Nav.Link href="/CyberSecurity">CyberSecurity</Nav.Link>
            </Nav>
            </Navbar.Collapse>
           </Container>
         </Navbar> 

       <section className="py-4  container">
            <div className="row justify-content ms-3 ">
          
                <Routes>
                   <Route path="/" element= {data.cardInfo.map((item,index)=>{
                return(
                     <Card img={item.img} title={item.title} key={index}/>
                      )
                })} />
                   <Route path="/FullStackDevelopment" element={<FullStackDevelopmen/>}/>
                   <Route path="/Career" element={<Career/>}/>
                   <Route path="/DataScience" element={<DataScience/>}/>
                   <Route path="/CyberSecurity" element={<CyberSecurity/>}/>
                </Routes>
            </div>
         </section>
     
    </>
  )
}

export default App
