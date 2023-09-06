import React from 'react'
import MainImg from '../../Assets/txtimg.png'
import styles from './Home.module.css'
import {Helmet} from "react-helmet";
import whoWeAre from '../../Assets/Who-we-Are-700x476.png'
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet       = "utf-8" />
        <title>Natiq - Home</title>
      </Helmet>
      <div className          = {`container-fluid vh-100 bg-white`}>
        <div data-testid      = "mainSec" className={`${styles.main} text-white p-5 row d-flex align-items-center mb-5`}>

          <div data-testid    = "Maintext" className="col-md-6 py-5">
            <h1 className     = 'mb-5 '>Natiq - Arabic Text to Speech</h1>
            <p className='mb-5 h5 shortDesc'>Natiq automatically reads your Arabic text out loud.
              <br/> You can generate audio files from text without
              <br/> the need for a professional reader.
            </p>
            <Link to='/about' className='rounded-pill fw-semibold bg-btn me-3 border-0 text-white py-2 px-3 text-decoration-none'>Read more</Link>
            <Link to='/natiq' className='rounded-pill fw-semibold btn-active me-3 border-0 text-white py-2 px-3 text-decoration-none'>Try Natiq</Link>
          </div>
          <div className      = "col-md-6 pb-5">
            <img data-testid  = "MainImg" src={MainImg} className='img-fluid' alt="Natiq home" />
          </div>
        </div>
        <div className="row p-5 d-flex align-items-center">
          <div className="col-md-6">
            <img src={whoWeAre} className='img-fluid' alt='whoWeAre-img' />
          </div>
          <div className="col-md-6">
            <h2 className="mb-5 h1 text-main">Who We Are?</h2>
            <p className='h5 text-muted'>RDI, also known as "The Engineering Company for the Development of Digital Systems" was founded in 1993. Also, The journey of our company began with a dream of developing a base that utilizes creative ideas emerging from academia; and converts them into practical prototypes. In addition to providing an incubator for these prototypes, allowing their further development into final products ready to be released on the market. A technological device or software program called an Arabic voice-to-text converter is made to translate spoken Arabic into written text. Therefore, RDI became a leading example in the Egyptian tech field, with its team of expert programmers, research engineers; as well as, business developers who spend endless hours turning dreams into viable and useful solutions for the society; such as Optical Character Recognition "OCR" Technologies, Natural Language Processing "NLP" Technologies; and also Speech Technologies. Not to mention our unique and innovative applications and software; such as ID Reader, Speech to text, Arabic Diacritization, Text to Speech, etc... Also many unique products and services that can satisfy all and different requirements.
            </p>
          </div>
        </div>
      </div>

    </>
  )
}
