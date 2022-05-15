import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import avatar from  '../../images/image-avatar.png'
import cart from '../../images/icon-cart.svg'
import menuIcon from '../../images/icon-menu.svg'
import closeIcon from '../../images/icon-close.svg'
import Cartcontent from '../CartContent/Cartcontent'




function Navbar(props) {
  
  const [navbar, setNavbar] = useState(false);
  const [modal, setModal] = useState(false);


  const handleClick = () =>{
    setNavbar(!navbar);

}
  const toggleModal = () => {
      setModal(!modal);
    };
    
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

  return (
    <header className='z-10 border-b border-gray-300 relative bg-white'>
      <div className={navbar? "block overlays": "hidden" }></div>
      <div className='navbar flex items-center lg:ml-1 m-2 h-12 w-auto'>
        <section className='items-center'>
          <div className='flex items-center'>
            <button className='flex items-center'>
              <i className='menubars h-4 w-5 ml-4 lg:hidden' onClick={handleClick}><img src={menuIcon} className={navbar? "hidden": "block transition-all" } alt="" /> </i>
            </button>
            <a href="" className="logo font-extrabold items-center text-4xl mb-2 lg:ml-0 ml-3">sneakers</a>
          </div>  
        </section>
        <section className=' lg:justify-between  flex  justify-end  w-full'>
          <nav className={`lg:flex   ${navbar? ' mobile-menu block bg-white h-screen w-2/3 flex justify-center fixed top-0 p-4 left-0 ': 'hidden'}`}>
            <ul onClick={handleClick} className={`lg:flex lg:flex-row  lg:font-normal lg:pl-20 lg:text-gray-500  nav-list flex flex-col font-bold pl-3  ${navbar ? "showMenu" : ""}`}>
              <li><img src= {closeIcon} alt=""  className={` lg:hidden ${navbar? " block pb-4 pt-2 cursor-pointer transition-all ": "hidden"}`}/></li>  
              <li className= 'lg:mr-10 lg:hover:text-black lg:hover:border-b-4 lg:border-orange-500 lg:pb-4 nav-tog pt-6'><NavLink  to="/" onClick={handleClick} >Collections</NavLink></li>
              <li className= "lg:mr-10 lg:hover:text-black lg:hover:border-b-4 lg:border-orange-500 lg:pb-4 nav-tog pt-6"><NavLink to="/about" onClick={handleClick} className='list-link'>Men</NavLink></li>
              <li className= "lg:mr-10 lg:hover:text-black lg:hover:border-b-4 lg:border-orange-500 lg:pb-4 nav-tog pt-6"><NavLink to="/work" onClick={handleClick} className='list-link'>Women</NavLink></li>
              <li className= "lg:mr-10 lg:hover:text-black lg:hover:border-b-4 lg:border-orange-500 lg:pb-4 nav-tog pt-6"><NavLink to="/contact" onClick={handleClick} className='list-link'>About</NavLink></li>
              <li className= 'lg:mr-10 lg:hover:text-black lg:hover:border-b-4 lg:border-orange-500 lg:pb-4 nav-tog pt-6'><NavLink to="/contact" onClick={handleClick} className='list-link'>Contact</NavLink></li>
            </ul>
          </nav>
          <div className='flex items-center  mr-4  '>
            <div href='' onClick={toggleModal} className=' flex mr-3 relative cursor-pointer'> 
              {modal && (
                <div className="modal">
                  <div onClick={toggleModal} className="overlay"></div>
                  <div className="modal-content grid place-items-center">
                    <Cartcontent reset={props.resetCounter} count ={props.count} toggleModal = {props.toggleModal} />
                  </div> 
                </div>
              )}
              <img src={cart} alt="shopping cart" className='h-5 w-5 mr-4  black ' />
              <span className={props.count>=1 ? 'count block':'hidden'} >{props.count}</span>
            </div>
            
            <button> <img src={avatar} alt="shopping cart" className='h-8 w-8 mr-4 hover:border-orange-500 hover:border-2 hover:rounded-2xl' /></button>
          </div>
          
        </section>
      </div>


    </header>
  )
}

export default Navbar