import './App.css';
// import Heading from './components/Heading';
import NavBar from './components/NavBar';
import Body from "./components/Body"
import AboutUs from './components/AboutUs';
import Products from './components/Products'
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"
// import SocialMediaLink from "./components/SocialMediaLinks"
// import Advert from './components/Advert'
function App() {
   return ( 
    <div className="App"> 
      <NavBar/>
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/about_us' element={<AboutUs/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/gallary' element={<Gallery/>}/>
        <Route path='/blogs' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      {/* <Body/> */}
      <Footer/> 
      
      </div> 
  ); 
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
