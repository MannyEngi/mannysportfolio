import Navbar from "./Components/Navbar/navbar"
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
// import Experience from "./Components/Experience/Experience";
// import Works from "./Components/Works/Works";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer"
import './App.css'
import { themeContext } from "./Context";
import { useContext } from "react";



function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background : darkMode? 'black' : '',
      color : darkMode? 'white': ''
    }}
    >
    <Navbar/>
    <Intro/>
    <About/>
    {/*<Services/>*/}
    {/*<Experience/>*/}
    {/*<Works/>*/}
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
