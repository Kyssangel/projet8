import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';

import './main.scss';

function App() {

  return (
    <>
    <Navigation/>
    <main>
      <Outlet />
      
    </main>
    </>
  )
}

export default App
