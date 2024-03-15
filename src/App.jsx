import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import './main.scss';
import Caroussel from'./pages/Caroussel.jsx';



function App() {

  return (
    <>
    
    <Navigation/>
    <main>
      <Outlet />
      <section>
      <Caroussel />
       
      </section>
  
      </main>
     <Footer />
    </>
  )
}

export default App
