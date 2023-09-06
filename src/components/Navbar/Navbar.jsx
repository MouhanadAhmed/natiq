import React , {useRef} from 'react'
import Logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar() {
  const homeRef =useRef()
  const natiqRef =useRef()
  const aboutRef =useRef()
  // e.target.classList.toggle('active')
  function handleClick(e){
    console.log(e);
    homeRef.current.classList.remove('active')
    natiqRef.current.classList.remove('active')
    aboutRef.current.classList.remove('active')
    e.target.classList.add('active')
  }
  return (
    <Navbar expand="lg" className="bg-white shadow-sm">
      <Container>
        <Link href="/" className="nav-link">
       <img src={Logo} className='img-fluid me-2' alt="Natiq logo" /></Link>
       <Link href="/" className="navbar-brand fw-semibold text-main">natiq
        <br/> <span className=' h6 text-second'>  By:RDI</span> 
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="navbar-nav ps-5 ms-5 fw-semibold w-75 d-flex justify-content-between align-items-center">
          <Link className="nav-link " ref={homeRef} aria-current="page" to="/" onClick={(e)=> handleClick(e) }>Home</Link>
          <Link data-testid="natiq" className="nav-link" ref={natiqRef} to="natiq" onClick={(e)=> handleClick(e) }>Natiq</Link>
          <Link className="nav-link" ref={aboutRef} to="about" onClick={(e)=> handleClick(e) }>About</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    

  )
}




{/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid py-3">
  <img src={Logo} className='img-fluid me-2' alt="Natiq logo" />
    <Link className="navbar-brand fw-semibold text-main" to="/">Natiq <br/> <span className='fw-normal h6 text-info'>  By:RDI</span> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse w-75" id="navbarNavDropdown">
      <ul className="navbar-nav ps-5 ms-5 fw-semibold w-75 d-flex justify-content-between align-items-center">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="natiq">Natiq</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about">About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav> */}