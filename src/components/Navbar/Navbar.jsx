import React , {useRef, useEffect} from 'react'
import Logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';

export default function NavBar() {
  const homeRef                         = useRef()
  const natiqRef                        = useRef()
  const aboutRef                        = useRef()
  const location                        = useLocation();

  /**
   * handleClick function to set the selected nav tab active
   * @param event the nav tab clicked
   */
  function handleClick(e){
    homeRef.current.classList.remove('active')
    natiqRef.current.classList.remove('active')
    aboutRef.current.classList.remove('active')
    e.target.classList.add('active')
  }
  /**
   * handleRefresh function to handle the active nav tab upon refresh
   */
  function handleRefresh(){
    homeRef.current.classList.remove('active')
    natiqRef.current.classList.remove('active')
    aboutRef.current.classList.remove('active')
    if(location.pathname === '/'){
      homeRef.current.classList.add('active')
    }else if(location.pathname === '/natiq'){
      natiqRef.current.classList.add('active')
    }else{
      aboutRef.current.classList.add('active')
    }
  }

  useEffect(()=>{
    handleRefresh()
  })
  return (
    <Navbar expand                      = "lg" className="bg-white shadow-sm">
      <Container>
        <Link href                      = "/" className="nav-link">
          <img src                      = {Logo} className='img-fluid me-2' alt="Natiq logo" />
        </Link>
        <Link href                      = "/" className="navbar-brand fw-semibold text-main">Natiq
          <br/> <span className=' h6 text-second'>  By:RDI</span> 
        </Link>
        <Navbar.Toggle aria-controls    = "basic-navbar-nav" />
          <Navbar.Collapse id           = "basic-navbar-nav" >
            <Nav className              = "navbar-nav ps-5 ms-5 fw-semibold w-75 d-flex justify-content-between align-items-center">
              <Link className           = "nav-link " ref={homeRef} aria-current="page" to="/" onClick={(e)=> handleClick(e) }>Home</Link>
              <Link data-testid         = "natiq" className="nav-link" ref={natiqRef} to="natiq" onClick={(e)=> handleClick(e) }>Natiq</Link>
              <Link className           = "nav-link" ref={aboutRef} to="about" onClick={(e)=> handleClick(e) }>About</Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    

  )
}