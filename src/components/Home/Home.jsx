import React from 'react'
import MainImg from '../../Assets/txtimg.png'
import styles from './Home.module.css'
import {Helmet} from "react-helmet";

export default function Home() {
  return (
    <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Natiq - Home</title>
            </Helmet>
<div className={`container-fluid vh-100 bg-white`}>

    <div data-testid="mainSec" className={`${styles.main} text-white p-5 row d-flex align-items-center`}>

      <div data-testid="Maintext" className="col-6 py-5">
      <h1 className='mb-5 '>Natiq - Arabic Text to Speech</h1>
      <p>Natiq automatically reads your Arabic text out loud.<br/> You can generate audio files from text without<br/> the need for a professional reader.</p>
      </div>
    <div className="col-6 pb-5">
      <img data-testid="MainImg" src={MainImg} className='img-fluid' alt="Natiq home" />
    </div>
    </div>

</div>

    </>
  )
}
