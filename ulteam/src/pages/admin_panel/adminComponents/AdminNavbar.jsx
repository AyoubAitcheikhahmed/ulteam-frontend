import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './adminNavbar.css';
import { menu_data } from '../menu_data';
import { IconContext } from 'react-icons';
import ulteam_logo_Admin from '../../../assets/ulteamLogo_Admin.png';
import {useDispatch} from 'react-redux';
import {logout,login_false } from '../../../redux/user_redux'



function AdminNavbar() {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const dispatch = useDispatch();

    const handleLogout = () =>{
      dispatch(logout())
      
    }
    




    
    return (
        <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
           
          </Link>
           <div className="logoText">Ulteam</div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
              <img src={ulteam_logo_Admin} alt="Ulteam logo"/>
            </li>
            <li className="nav-text" onClick={handleLogout}>
              <Link to='#' >
              <AiIcons.AiOutlinePoweroff />
              <span>LOGOUT</span>
            
            </Link>
            </li>
            {menu_data.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
    )
}

export default AdminNavbar

