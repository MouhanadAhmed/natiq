import React from 'react'
import styles from './About.module.css'
import MainImg from '../../Assets/txtimg.png'
import {Helmet} from "react-helmet";

export default function About() {
  return (
    <>
    <Helmet>
      <meta charSet           = "utf-8" />
      <title>Natiq - About</title>
    </Helmet>
    <div className            = {`container-fluid bg-white vh-100 `}>

      <div data-testid        = "mainSec" className={`${styles.main} px-5 mb-5 row d-flex align-items-center`}>

        <div data-testid      = "Maintext" className="col-6 ">
          <h1 className       = 'mb-5 text-main'>Text to speech Arabic</h1>
          <p className='h6'>Transform your input text into valuable synthesized natural voice</p>
        </div>
        <div className        = "col-6 ">
          <img data-testid    = "MainImg" src={MainImg} className='w-75 ms-auto' alt="Natiq home" />
        </div>
      </div>

      <div data-testid        = "descSec" className="row  mb-5">
        <div data-testid      = "descRow" className="col px-5">
          <p data-testid      = "descTxt" className='h5 text-center px-5'>Natiq is RDI’s state-of-the-art text-to-speech software, that enables users to convert their Arabic input text into spoken words with different natural voices. This technology is built on Tashkeel, RDI’s Arabic Diacritizer. Tashkeel converts raw Arabic text into diacritized text, so that it can be read out loud as speech with the proper pronunciation. Natiq is an easy-to-use robust software that allows for different users’ preferences, resulting in seamless audio-powered applications that enrich user experiences and engage audiences.</p>
        </div>
      </div>

      <div data-testid        = "featureSec" className="row mb-5 text-center px-5">
        <div  className       = "col-12 mb-5">
          <h3 className={styles.lines} data-testid     = "featureTitle">Main Features</h3>

        </div>
        <div data-testid      = "AccurateSec" className="col-md-4 mb-5">
          <p data-testid      = "AccurateIco"><i className={`fa-solid fa-circle-check fa-2xl text-icon mb-4 ${styles.icon}`}></i></p>
          <h4 data-testid     = "Accurate" className='text-icon fw-semibold mb-5'>Accurate</h4>
          <p data-testid      = "AccurateP" className=' mx-auto fs-6'>RDI uses the most advanced deep-learning neural network algorithms for its text-to-speech engine. RDI uses multiple recognition layers to guarantee the most accurate diacritized text & synthesized voice.</p>
        </div>
        <div data-testid      = "smartSec" className="col-md-4 mb-5">
          <p><i data-testid   = "smartIco" className={`fa-brands fa-elementor fa-2xl text-icon mb-4  ${styles.icon}`}></i></p>
          <h4 data-testid     = "smart" className='text-icon fw-semibold mb-3'>Smart - Abbreviations Expansion</h4>
          <p data-testid      = "smartP" className=' mx-auto fs-6 pt-1'>Natiq is supported by abbreviation expansion and number-to-text conversion modules. The number-to-text sophisticated module can convert numbers, dates, currencies,.. etc. into accurate corresponding text, to be read out loud.</p>
        </div>
        <div className        = "col-md-4 mb-5">
          <p><i className     = {`fa-solid fa-a fa-2xl text-icon mb-4 ${styles.icon}`}></i></p>
          <h4 className       = 'text-icon fw-semibold  mb-5'>User Diacritics Preferences</h4>
          <p className        = ' mx-auto fs-6'>Ability to set up user preferences. This enables users to vowelize some letters in some words based on their preferences, regardless of the default application settings.</p>
        </div>
        <div className        = "col-md-4 mb-5">
          <p><i className     = {`fa-solid fa-headphones fa-2xl text-icon mb-4 ${styles.icon}`}></i></p>
          <h4 className       = 'text-icon fw-semibold  mb-5'>Export Audio Files</h4>
          <p className        = ' mx-auto fs-6'>Easily export Natiq’s out-loud reading of your text as high-quality audio files (.wav).</p>
        </div>
        <div className        = "col-md-4 mb-5">
          <p><i className     = {`fa-solid fa-check-double fa-2xl text-icon mb-4  ${styles.icon}`}></i></p>
          <h4 className       = 'text-icon fw-semibold mb-3'>Supports Multiple Input Formats</h4>
          <p className        = ' mx-auto fs-6 pt-1'>Natiq supports input files in two main formats, .txt and .doc. Natiq can be easily adapted to accept more formats based on customer’s needs.</p>
        </div>
        <div className        = "col-md-4 mb-5">
          <p><i className     = {`fa-solid fa-microphone fa-2xl text-icon mb-4 ${styles.icon}`}></i></p>
          <h4 className       = 'text-icon fw-semibold  mb-5'>Natural-sounding voices</h4>
          <p className        = ' mx-auto fs-6'>Natiq supports high-quality, natural-sounding male & female voices. Additional voice options can be added based on data availability, and the customer’s needs. Natiq also outputs any Quran text with tarteel.</p>
        </div>


      </div>

      <div className          = "row mb-5 text-center px-5">
        <div  className       = "col-12 mb-5">
          <h3 className={styles.lines}>Why Natiq?</h3>
        </div>

        <div className        = "col-md-3 mb-5">
          <p><i className     = {`fa-solid fa-server fa-2xl text-icon mb-4 ${styles.icon}`}></i></p>
          <h5 className       = 'text-icon fw-semibold  mb-3'>Domain & Environment Adaptation</h5>
          <p className        = 'pt-2'>Natiq supports high-quality, natural-sounding male & female voices. Additional voice options can be added based on data availability, and the customer’s needs. Natiq also outputs any Quran text with tarteel.</p>
        </div>
        
        <div className        = "col-md-3 mb-5">
          <p><i className     = {`fa-solid fa-a fa-2xl text-icon mb-4 ${styles.icon}`}></i></p>
          <h5 className       = 'text-icon fw-semibold  mb-5'>Tailored for Arabic</h5>
          <p >Natiq contains a set of models that are tailored for serving the Arabic language. This edge allows the recognizer to outperform its general-model counterparts.</p>
        </div>
        
        <div className        = "col-md-3 mb-5">
          <p><i className     = {`fa-solid fa-gear fa-2xl text-icon mb-4 ${styles.icon}`}></i></p>
          <h5 className       = 'text-icon fw-semibold  mb-5'>Productivity Booster</h5>
          <p >Natiq reads your text out loud at the click of a button. Users can save time and effort with Natiq’s easy to use interface.</p>
        </div>
        
        <div className        = "col-md-3 mb-5">
          <p><i className     = {`fa-solid fa-shield fa-2xl text-icon mb-4 ${styles.icon}`}></i></p>
          <h5 className       = 'text-icon fw-semibold  mb-3'>Customer’s Data Confidentiality</h5>
          <p  className       = 'pt-2'>The user’s input/output files are never shared with third parties. We can set up the solution environment at your side, train your employees, and provide a full customer support service.</p>
        </div>
        
      </div>

    </div>
    </>
    
  )
}
