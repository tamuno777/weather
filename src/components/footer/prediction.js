import React from 'react'
import './index.css'

export default function Prediction({Data}) {
  return (
    <div className='footer-container'>
      <h1>
        More Details....
      </h1>
      
      <div className='lastly'>
        <h2>{Data.name}</h2>
       <div>
       {Data? <p><strong>Lat :</strong> {Data.coord.lat}</p> : null}
       {Data? <p><strong>Lon :</strong> {Data.coord.lon}</p> : null}
       </div>

      </div>
    </div>
  )
}
