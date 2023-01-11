import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import { useEffect } from 'react';
const getData=()=>{
  const data=localStorage.getItem("descriptions");
  if(data){
    return JSON.parse(data)
  }else{
    return []
  }
}
const App=()=> {
  const [diagnosed,setDiagnosed]=useState("");
  const [physical,setPhysical]=useState("")
  const [mental,setMental]=useState("")
  const [how_experience_prob,setHowExperienceProb]=useState("")
  const [when_experience_prob,setWhenExperienceProb]=useState([])
  const [scale,setScale]=useState("")
  const [descriptions,setDescription]=useState(getData())
  const handleChange = (event) => {
    console.log("name",event.target.name);
    console.log("vale",event.target.value);
    if(event.target.name==="diagnosed"){
      setDiagnosed(event.target.value);

    }else if(event.target.name==="physical"){
    setPhysical(event.target.value)

    }
    else if(event.target.name==="how_experience_prob"){
      setHowExperienceProb(event.target.value)
    }
    else if(event.target.name==="scale"){
      setScale(event.target.value)
    }
   
    else if(event.target.name==="mental"){
    setMental(event.target.value)

    } else if(event.target.checked){
      setWhenExperienceProb([...when_experience_prob,event.target.value])
    }else {
      setWhenExperienceProb(when_experience_prob.filter((e)=>e !== e.target.value))
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let description={
      diagnosed,
      physical,
      mental,how_experience_prob,scale,when_experience_prob

    }
    setDescription([...descriptions,description])
    setDiagnosed("");
    setPhysical("");
    setMental("");
    setHowExperienceProb("");
    setWhenExperienceProb([])
    setScale("");
    alert("Successfully added")

 };

 useEffect(()=>{
   localStorage.setItem("descriptions",JSON.stringify(descriptions))
 },[descriptions])
  return (
  <>
  
  
    <div className="App">
      <h1 style={{color:"#4c89ff"}}>Pain & Functional Description</h1>
      <p>The description of the current situation gives your Optimum</p>
       <p>Trainer a picture of and clues to the  underlying causes of your
    </p>  
    <p> problems</p>  
    <p>If you have problems with pain/aches,stiffnss,weakness or functional problems,describe this/these below.(List the symptoms in descending order with the most troublesome firt)</p>
    <form>
      <table border={2} style={{width:"80%",marginLeft:"140px",height:"50px"}}>
        <tr>
                Have you been diagnosed with this problems?
          <input type="radio" name="diagnosed" style={{marginLeft:"60px"}} value="Not relevent" checked={diagnosed==="Not relevent"} onChange={handleChange}/> Not relevent
        <input type="radio"  name="diagnosed" style={{marginLeft:"60px"}} value="Yes" checked={diagnosed==="Yes"} onChange={handleChange}/> Yes
        <input type="radio"  name="diagnosed" style={{marginLeft:"60px"}} value="No" checked={diagnosed==="No"} onChange={handleChange}/> No
        
          
         </tr>
         <br></br>
         <tr>
             Did the problem start after a physical trauma?
          
           
        <input type="radio" name="physical" style={{marginLeft:"60px"}} value="Not relevent" checked={physical==="Not relevent"} onChange={handleChange} /> Not relevent
        <input type="radio"  name="physical" style={{marginLeft:"60px"}} value="Yes" checked={physical==="Yes"} onChange={handleChange}/> Yes
        <input type="radio"  name="physical" style={{marginLeft:"60px"}} value="No" checked={physical==="No"} onChange={handleChange}/> No
          
        </tr>
        <br></br>
         <tr>
        
           Did the problem start after a mental reauma ?
           
           <input type="radio" name="mental" style={{marginLeft:"60px"}} value="Not relevent" checked={mental==="Not relevent"} onChange={handleChange}/> Not relevent
        <input type="radio"  name="mental"style={{marginLeft:"60px"}} value="Yes" checked={mental==="Yes"} onChange={handleChange}/> Yes
        <input type="radio"  name="mental" style={{marginLeft:"60px"}} value="No" checked={mental==="No"} onChange={handleChange}/> No
          
        </tr>
        <br></br>
        <tr>
        
           How often do you experience the problem?
        </tr>
        <tr>
           <input type="radio" name="how_experience_prob" value="Not relevent" checked={how_experience_prob==="Not relevent"} onChange={handleChange}/> Not relevent
        <input type="radio"  name="how_experience_prob" value="Daily" checked={how_experience_prob==="Daily"} onChange={handleChange} style={{marginLeft:"60px"}}/> Daily
        <input type="radio"  name="how_experience_prob" value="Several times/week" checked={how_experience_prob==="Several times/week"} onChange={handleChange} style={{marginLeft:"60px"}}/> Several times/week
        <input type="radio"  name="how_experience_prob" value="A few times/month" checked={how_experience_prob==="A few times/month"} onChange={handleChange} style={{marginLeft:"60px"}}/> A few times/month
        <input type="radio"  name="how_experience_prob" value="A few times/year" checked={how_experience_prob==="A few times/year"} onChange={handleChange} style={{marginLeft:"60px"}} /> A few times/year</tr>
        <br></br>
        <tr>
           When do you experience the problem?
         </tr>
         <tr> <tr>
           <input type="checkbox" value="not relevent" name='when_experience_prob' onChange={handleChange} /> Not relevent
           </tr><tr>
        <input type="checkbox"  value="when lying down"name='when_experience_prob' onChange={handleChange} /> When lying down
        </tr><tr>
        <input type="checkbox"  value="When sitting" name='when_experience_prob' onChange={handleChange} /> When sitting</tr><tr>
        <input type="checkbox"  value="Under standing" name='when_experience_prob' onChange={handleChange} /> Under standing</tr><tr>
        <input type="checkbox"  value="In walking" name='when_experience_prob' onChange={handleChange} /> In walking</tr>
        </tr>
        <br></br>
        <tr>How intense is the experienceof the problem on average on a 0-10 scale?</tr>
        <tr>
        <input type="radio"  value="1" name="scale" checked={scale==="1"} onChange={handleChange}/> 1
        
        <input type="radio"  value="2" name="scale" checked={scale==="2"} onChange={handleChange} style={{marginLeft:"20px"}}/> 2
        <input type="radio"  value="3" name="scale" checked={scale==="3"} onChange={handleChange} style={{marginLeft:"20px"}}/> 3
        <input type="radio"  value="4" name="scale" checked={scale==="4"} onChange={handleChange} style={{marginLeft:"20px"}}/> 4
        <input type="radio"  value="5" name="scale" checked={scale==="5"} onChange={handleChange} style={{marginLeft:"20px"}}/> 5
        <input type="radio"  value="6" name="scale" checked={scale==="6"} onChange={handleChange} style={{marginLeft:"20px"}}/> 6
        <input type="radio"  value="7" name="scale" checked={scale==="7"} onChange={handleChange} style={{marginLeft:"20px"}}/> 7
        <input type="radio"  value="8" name="scale" checked={scale==="8"} onChange={handleChange} style={{marginLeft:"20px"}} /> 8
        <input type="radio"  value="9" name="scale" checked={scale==="9"} onChange={handleChange}  style={{marginLeft:"20px"}}/> 9
        <input type="radio"  value="10"name="scale" checked={scale==="10"} onChange={handleChange} style={{marginLeft:"20px"}} /> 10</tr>
      
      <br></br> 
            </table>
            <div>
            <button className='submit' 
            style={{border:"0",borderRadius:"15px",backgroundColor:"#4c89ff",marginLeft:"50%",cursor:"pointer",color:"white",fontSize:"20px"}} 
            onClick={handleSubmit} disabled={!diagnosed||!mental||!physical||!when_experience_prob||!how_experience_prob||!scale}>+</button>
            </div>
                  <div>
      <Link to={{pathname:"/edit",state:{descriptions}}}> <button style={{marginLeft:"30%",width: "15%",marginTop:"20px",cursor:"pointer",
  height: "40px",
  border: "0",
backgroundColor:"#4c89ff",color:"white"}}>Back</button></Link> 
      <Link to="/summary"> <button  style={{marginLeft:"10%",width: "15%",
  height: "40px",
  border: "0",color:"white",
backgroundColor:"#4c89ff",cursor:"pointer"}}>Next</button></Link> 

      </div>
      </form>
    </div></>
  );
}

export default App;