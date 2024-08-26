import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Contact from './components/contact/contact.jsx'
import About from './components/about/about.jsx'
import Protofilo from './components/Protofilo/Protofilo.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {

let routers = createBrowserRouter([
  
 { path:'' , element:<Layout/>,children:[


{ path:'about' , element:<About/>                         },
{path:'contact' , element:<Contact/>},
{path:'portofilo' , element:<Protofilo/>}







 ] } 








]










)


return(<>

<RouterProvider  router={routers}                >                         </RouterProvider>







</>)


 
}

export default App
