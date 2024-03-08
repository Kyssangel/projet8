import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import './main.scss';

function App() {

  return (
    <>
    <Navigation/>
    <main>
      <Outlet />

      </main>
     <Footer />
    </>
  )
}

export default App
