import React from 'react';
import { SlProgressRing } from '@shoelace-style/shoelace/dist/react';

const Ring = ({title, value}) => {
  return (
    <div>
<SlProgressRing
    value={value}
    style={{
      '--track-color': 'pink',
      '--indicator-color': 'deeppink'
    }}
  >{value}%</SlProgressRing>
  <p style={{
    fontSize:'1.5rem',
    marginTop:'1em',
    textAlign:'center'
  }}>{title}</p>
    </div>
  )
}

export default Ring