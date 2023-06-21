import React, { createContext, useState } from 'react'
import './header.css'
import axios from 'axios'
import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import Body from '../body/body';
import Prediction from '../footer/prediction';

export default function Header( ) {
  const [city, setcity] = useState('')
  const [Data, setData] = useState({})

  const handlechange = (e) => {

     setcity( e.target.value)
     
  }
  const handlesubmit = (e) => {
    e.preventDefault()
    // if (e.key === 'Send') {
      console.log(city)
    
      axios.get (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=8c5f529e49993d6a3749b102be0fa501`)
      .then(res => {
        setData(res.data)
        
        console.log(Data)
        
      })
      .catch( err => {
        console.log(err)
      })
      
    // }
   
      
   
  }
  
  

  return (
    <div>
        <div>
            <p>
                Right now in 
                <input type="text" value={city} onChange={handlechange} />
                <Button variant="contained" color="primary" endIcon={<SendIcon />} onClick={handlesubmit} type='submit'> Send</Button>
            </p>
        </div>
        <div>
        <Body Data={Data}/>

        </div>   
        <div>
        <Prediction  Data={Data}/>
        </div>     
    </div>
  )
}
