import React from 'react'
import './SideBar.css';
import logo from '../../assest/logo.svg';


const SideBar = () => {
  return (
    <aside className='aside'>
      <a href="#home" className="nav__logo"> 
      <img src={logo} alt=''></img>
      </a>

      <nav className="nav">
        <div className='nav__menu'>
          <ul className='nav__list'>
            <li className='nav__item'>
               <a href='#about'className='nav__list'>
                <i className='icon-home'></i>
               </a>
             
            </li>

            <li className='nav__item'>
               <a href='#services'className='nav__link'>
                 <i className='icon-User-following'></i>
               </a>
             
            </li>
            <li className='nav__item'>
               <a href=''className='nav__link'>
                 <i className='icon-briefcase'></i>
               </a>
             
            </li>
            <li className='nav__item'>
               <a href='#resume'className='nav__link'>
                 <i className='icon-graduate'></i>
               </a>
             
            </li>
            <li className='nav__item'>
               <a href='portfolio'className='nav__link'>
                 <i className='icon-layers'></i>
               </a>
             
            </li>
            <li className='nav__item'>
               <a href='#blog'className='nav__link'>
                 <i className='icon-note'></i>
               </a>
             
            </li>
              <li className='nav__item'>
               <a href='#contact'className='nav__link'>
                 <i className='icon-bubble'></i>
               </a>
             
            </li>
          </ul>

        </div>
      </nav>
      <div className='nav-footer'>
        <span className='copyright'>&copy;2021-2026</span>
      </div>
    </aside>
  )
}

export default SideBar
 