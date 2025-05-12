import React from 'react'
import './Widget.css'
import InfoIcon from '@material-ui/icons/Info'

function Widget() {
  return (
    <div className='widgets'>
        <div className='widgets__header'> 
        <h2>Networq News</h2>
        <InfoIcon/>
        </div>
    </div>
  )
}

export default Widget