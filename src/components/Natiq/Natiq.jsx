import { React, useState, useRef } from "react";
import axios from 'axios'
import styles from './Natiq.module.css'
// import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMutation } from "@tanstack/react-query";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import {Helmet} from "react-helmet";
import Loading from '../../utils/Loading/Loading.jsx'

export default function Natiq() {
  const audio = useRef();
  const textRef = useRef();
  // state control to count the input charcters and clear the text
  const [input, setInput] = useState("");
  const [playBackRate, setPlayBackRate] = useState(0.5);
  const [time,setTime]=useState();
  const [isFetching,setIsFetching]=useState(false);
  
    /**
   * Link custom tag to render tooltip on hover  
   * @param {*} id triggered by textarea
   * @param {*} children the element to be associated with tooltip
   * @param {*} title text for the tooltip
   */
  const Link = ({ id, children, title }) => (
    <OverlayTrigger  placement="bottom"  overlay={<Tooltip id={id}>{title}</Tooltip>}>
      <span  >{children}</span>
    </OverlayTrigger>
  );
  
  /**
   * InputHandler function validate if the input is in Arabic language then set the input state 
   * @param {*} event triggered by textarea
   */
  const inputHandler = (e) => {
    !(/^[\u0621-\u064A \n]+$/.test(e.target.value)) ? setInput('') : setInput(e.target.value);
  };


  /**
   * callNatiq function to post text to the API using react-query and convert it to audio
   * @param none
   * @invoke callNatiq.mutate()
   */
  // const callNatiq = useMutation({
  //   mutationFn: async()=>{
  //     setIsFetching(true);
  //         return   axios
  //         .post(`https://echo-6sdzv54itq-uc.a.run.app/natiq/`,
  //         {
  //           text:input?input:"السلام عليكم"
  //         },
  //         {
  //           headers                         : {"Content-Type":"application/json"}
  //         }).catch((err)=> {
  //           console.log(err)
  //           toast.error(err, {
  //             position: "top-right",
  //             autoClose: 3000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "colored",
  //             });
  //         }) ;
  //   },
  //   onSuccess: (callNatiq) => {
  //     // console.log(callNatiq.data);
  //               const decoded = callNatiq.data.wave.replaceAll(/_/g, '/').replaceAll(/-/g, '+');
  //         // creating a new  HTMLAudioElement object from base64 data
  //         let result =new Audio(`data:audio/ogg;base64,${decoded}`)
  //         //  setAudio(result);
  //          audio.current = result;

  //         //send the last word start time to playAudio function to play it two extra times
  //       playAudio(callNatiq.data.durations[callNatiq.data.durations.length-1][1]);
  //       setIsFetching(false);
  //   },
  //   onError: (error) => {
  //     setIsFetching(false);
  //     // console.log(error);
  //     toast.error(`Please enter text`, {
  //       position: "top-right",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "colored",
  //       })
  //   }
  // })

  const CallNatiq = async () => {
      try {
        setIsFetching(true);
        if (input.length !== 0) {
          const response = await axios
          .post(`https://echo-6sdzv54itq-uc.a.run.app/natiq/`,
          {
            text:input,
          },
          {
            headers                         : {"Content-Type":"application/json"}
          }).catch((err)=> {
            console.log(err)
            toast.error(err, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
          });
      // 💡 response of the mutation is passed to onSuccess
          // console.log(response.data.durations[response.data.durations.length-1][1]);
          // console.log(response.data.durations.length);
          // converting urlsafe_b64 to base64 data 
          const decoded = response.data.wave.replaceAll(/_/g, '/').replaceAll(/-/g, '+');
          // creating a new  HTMLAudioElement object from base64 data
          let result =new Audio(`data:audio/ogg;base64,${decoded}`)
          //  setAudio(result);
          audio.current = result;
          //  last word start time
          playAudio(response.data.durations[response.data.durations.length-1][1]);
        // playAudio();
        setIsFetching(false);
        }else{
          // console.log("Please enter text");
          toast.error('Please enter text', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        setIsFetching(false);

        }
    }catch (error) {
      console.log(error);
      setIsFetching(false);

      }
    }

    /**
   * playAudio function to play the audio
   * @param time  the staeting time of the last word to repeat it twice more, creating an echo
   */
    const playAudio = (time)=>{
      audio.current.playbackRate= playBackRate;
      setTime(time);
      audio.current.play();

               let played=0;
               let maxPlay=2;
               // 
              audio.current.onended= ()=>{
                
                audio.current.currentTime=time;
                 played++;
                 played <=maxPlay && audio.current.play()
               }
    }

   /**
   * clearText function to clear the text input and pause the audio
   * @param none
   */
    const clearText =()=>{
      if(input)
    {
        audio.current.pause();
      setInput("");
    }
    }

   /**
   * handlePlayBack function to change the playbackRate of the audio
   * @param playBackRate
   */
    const handlePlayBack = (playBackRate)=>{
      setPlayBackRate(playBackRate);
      if(input){
        audio.current.playbackRate= playBackRate;
      }
    }

   /**
   * getFile function to check the text file content not empty
   * @param event the input type file
   */
    function getFile(event) {
      const input = event.target
      if ('files' in input && input.files.length > 0) {
        placeFileContent(
          textRef.current,
          input.files[0])
      }
    }
    
   /**
   * placeFileContent function to place the text file content into the text area field
   * @param target the text area field
   * @param file   the uploaded file
   */
    function placeFileContent(target, file) {
      readFileContent(file).then(content => {
        target.value = content
        setInput(content);
        inputHandler();
      }).catch(error => console.log(error))
    }
    
   /**
   * readFileContent function to process the text file content and check the status 
   * @param file   the uploaded file
   */
    function readFileContent(file) {
      const reader = new FileReader()
      return new Promise((resolve, reject) => {
        reader.onload = event => resolve(event.target.result)
        reader.onerror = error => reject(error)
        reader.readAsText(file)
      })
    }

    if(isFetching){
      return <Loading></Loading>
    }
  return (
    <>
                <Helmet>
                <meta charSet="utf-8" />
                <title>Natiq - Service</title>
            </Helmet>
    <div className="container py-5">
  
        <div className={`${styles.textBox} row mb-3 pt-5  mx-auto position-relative text-muted`}>
  <textarea data-testid="inputField" dir="auto" ref={textRef} maxLength={200} value={input} onChange={inputHandler} placeholder="Type your text here..." className={`form-control shadow shadow-sm ${styles.input} p-4`} id="exampleFormControlTextarea1" rows={9} cols={4}></textarea>
    <span data-testid="counter" className={styles.counter}> The supported language is Arabic <br/> Max charcters :  {200 - input.length}</span>
    <div className={`rounded rounded-pill mx-auto py-2 ${styles.controls}`}>
      
  
      <div data-testid="selectContainer" className="col-md-4">

      <select data-testid="select" name="playback" type="button" className="btn text-center rounded-pill " onChange={(e) => handlePlayBack(e.target.value)} >
       <option data-testid="0.5" value="0.5">0.5x</option>
       <option value="1">1x</option>
       <option value="1.5">1.5x</option>
       <option value="1.75">1.75x</option>
      </select>

      </div>

     

      <div className={`col-md-2 position-relative ${styles.spacer}`}></div>
      <button data-testid="echo" type="button" onClick={()=> CallNatiq()} className={`  rounded rounded-circle bg-white p-4 shadow text-second ${styles.play}`}>{isFetching?<i className="fa-solid fa-circle-notch fa-spin fa-2xl"></i>    :<Link title="Echo" id="t-1"><i className="fa-solid fa-play fa-2xl"></i></Link>} </button>
   
     <div className="offset-md-2 col-md-4">
     <div className="d-flex justify-content-center align-items-center ">
<label className={` btn rounded me-5 p-2 rounded-circle bg-white ${styles.upload} `}>
<Link title="Upload text (.txt)/ 10KB max" id="t-2">
<i className="fa-solid fa-plus text-second fw-bold fa-xl"></i></Link> <input data-testid="uploadTxt" type="file" style={{"display": "none"}} onChange={(e)=> getFile(e)} name="image"/>
</label>

      <Link title="Clear text" className="" id="t-3">
      <button data-testid="clearTxt" type="button" className={`btn rounded  rounded-circle bg-white `} onClick={clearText}>
      <i data-testid="clearIco" className={`fa-solid fa-rotate-right fa-rotate-270 ${styles.reset}`}></i>
      </button>
      </Link>
      </div>
     </div>


    </div>
</div>
<ToastContainer/>
    </div>

    </>
  )
}
