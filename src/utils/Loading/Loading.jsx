import React from 'react'
// import {  ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css';
export default function Loading() {
  return (
    <div data-testid="overlay" className='vh-100 bg-light  d-flex justify-content-center align-items-center'>
      <div data-testid="loader" className="loader"></div>
      {/* <ToastContainer/> */}
        {/* <i className='fa-solid fa-spinner fa-spin fa-7x'></i> */}
    </div>
  )
}