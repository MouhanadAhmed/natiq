import React from 'react'
import errorImg from '../../Assets/error-1.png'
import {Helmet} from "react-helmet";

export default function NotFound() {
  return (
    <>
                <Helmet>
                <meta charSet="utf-8" />
                <title>Natiq - 404</title>
            </Helmet>
    <div data-testid="overlay" className="container-fluid vh-100 bg-info">
      <div data-testid="row" className="row py-5 mb-5 d-flex align-items-center justify-content-center">
    <img data-testid="img" className='w-100 m-auto py-5' src={errorImg} alt="404 Not Found" />
    <h2 data-testid="head" className='mx-auto h1 text-center fw-bold text-primary mb-3'>Page Not Found!</h2>
    <h4 data-testid="txt" className='mx-auto text-center text-muted h6'>Oops! The page you are looking for does not exist. It might have been moved or deleted.</h4>
      </div>
    </div>
    </>
  )
}
