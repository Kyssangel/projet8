import {  NavLink } from 'react-router-dom'
import logo from'../../assets/images/logo-red.svg'


export default function Navigation() {
    return  (
        <header className='header'>
            <img src={logo} alt="logo Kyra"/>
            <nav>
                <ul>
                    <li><NavLink to='/'>Acceuil</NavLink></li>
                    <li><NavLink to='/about'>A propos</NavLink></li>
                </ul>

            </nav>
        </header>
    )
}