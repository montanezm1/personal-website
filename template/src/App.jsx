
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import './styles/index.css'

function App() {
  let Comp
switch(window.location.pathname) {
  case "/": {
    Comp = Home;
    break;
  }
  case "/about": {
    Comp = About;
    break;
  }
  case "/project": {
    Comp = Project;
    break;
  }
  case "/contact": {
    Comp = Contact;
    break;
  }
  
}
 

  return (
    <div>
      <Navbar></Navbar>
      <Comp></Comp>
      <Footer></Footer>
    </div>
  );
}

export default App
