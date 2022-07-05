import React from 'react'

const Header = () => {
  return (
    <div style={{
        display:'grid',
        placeItems:'center',
        marginTop:'5em',
        textAlign:'center'
    }}>
        <h1 style={{
            fontSize:'3em',
        }}>
            Gain a better <span style={{
                color:'#1166f0'
            }}>Perspective</span>.
        </h1>
    </div>
  )
}

export default Header