import React from 'react';
import { useState } from 'react';
import './App.css';
import {Link} from "react-router-dom"
import View from './View';
const getData=()=>{
    const data=localStorage.getItem("descriptions");
    if(data){
      return JSON.parse(data)
    }else{
      return []
    }
  }
const Summary=()=>{
    const [descriptions,setDescription]=useState(getData())
    const [back,setBack]=useState(false)

    return(<>
        <h1>Summary</h1>
       <table>
           {descriptions?.length>0 && <><div><table border={2}>
          <thead>
              
            <th>Have you been diagnosed with this problems?</th>
  <th>Did the problem start after a physical trauma?</th>
  <th>
Did the problem start after a mental reauma?</th>
  <th>How often do you experience the problem?</th>
  <th>When do you experience the problem?</th>
  <th>How intense is the experienceof the problem on average on a 0-10 scale?</th></thead>  <tbody><View descriptions={descriptions}/></tbody>
            </table></div></>}
       </table> 
       <br></br>
  <Link to="/" > <button style={{marginLeft:"10%",width: "15%",
  height: "40px",
  border: "0",color:"white",
backgroundColor:"#4c89ff",cursor:"pointer",marginLeft:"40%"}}>Back</button></Link>

       </>
    )
}
export default Summary
