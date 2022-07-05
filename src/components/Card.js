import React from 'react'
import Ring from './Ring'

const Card = ({head, details, id}) => {
  return (
    <div style={{
        border:'2px solid #1166f0',
        borderRadius:'5px',
        padding:'1.5em',
        display:'flex',
        flexDirection:'column',
        justifyItems:'center',
        boxShadow: ' 2px 12px 56px -34px rgba(0,0,0,0.66)',
        WebkitBoxShadow: ' 2px 12px 56px -34px rgba(0,0,0,0.66)',
        MozBoxShadow: ' 2px 12px 56px -34px rgba(0,0,0,0.66)',
    }}>
        <div style={{
            display:'flex',
            justifyContent:'space-between',
            paddingTop:'0.5em'

        }}><h2>{head}</h2>
        <span style={{
            fontSize:'3.8em',
            opacity:'0.3',
            marginTop:'-0.25em',
        }}>{id}</span>
        </div>
        <p style={{
            paddingTop:'1em',
            opacity:"0.8",
            fontWeight:'550',
            lineHeight:'1.75'
        }}>{details}</p>
    </div>
  )
}

export default Card