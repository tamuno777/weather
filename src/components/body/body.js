import React from 'react'
import{ TiWeatherSunny } from 'react-icons/ti'
import './body.css'
import { IconContext } from 'react-icons'


export default function Body({Data}) {
  return (
    <div className='flex'>
        <div className='border'>
        <IconContext.Provider value={{size: '90%'}}>
        <TiWeatherSunny/>
        </IconContext.Provider>
        </div>
        <div>
          {Data ? <h1>{Data.main.temp}</h1> :null}
          {Data ?           <h5>{Data.weather[0].main}</h5>
 :null}
          
          
          
          
        </div>
          
        <div className=' detail'> 
          {Data ?           <h3>{Data.wind.speed} MPH </h3>
 :null}
          {Data ?           <h3> {Data.main.humidity} %</h3>
 :null}
          {Data ?           <h3> {Data.main.feels_like} F</h3>
 :null}
          
        </div>
    </div>
  )
}
