import React, { useState } from 'react'
import Ring from './Ring';
import axios from 'axios';

const Box = () => {
    const [Input, setInput] = useState('What kind of idiot are you?');

    const [toxic, settoxic] = useState(0.9);
    const [flirt, setflirt] = useState(0.21);
    const [insult, setinsult] = useState(0.8);
    const [threat, setthreat] = useState(0.98);

    async function handleSubmit(){
        const PERSPECTIVE_API_URL = `https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=${process.env.REACT_APP_API_KEY}`;
        const res = await axios.post(PERSPECTIVE_API_URL, {
            comment: {
                text: Input
            },
            requestedAttributes: {
              TOXICITY: {},
              INSULT: {},
              FLIRTATION: {},
              THREAT: {}
            }
        }).then(res =>{
            console.log(res.data.attributeScores)
            settoxic(res.data.attributeScores.TOXICITY.summaryScore.value);
            setflirt(res.data.attributeScores.FLIRTATION.summaryScore.value);
            setthreat(res.data.attributeScores.THREAT.summaryScore.value);
            setinsult(res.data.attributeScores.INSULT.summaryScore.value);
        }).catch(err =>{
            console.log(err)
        })
}

  return (
    <div style={{
        display:'grid',
        placeItems:'center',
        marginTop:'5em',
    }}>
        <p style={{
            paddingBottom:'1em',
            fontStyle:'italic',
            fontSize:'1.4rem',
            textAlign:'center'
        }}>Enter a twitter tweet or a social Media comment</p>
        <form onSubmit={(e) =>{
            e.preventDefault();
            handleSubmit();
        }}><input value={Input} placeholder='Enter your text here' onChange={(e) =>{
            setInput(e.target.value)
        }} style={{
            padding:'10px',
            width:'18em',
            borderRadius:'5px',
            outline:'none',
            marginTop:'1em',
        }}/><button type='submit' style={{
            padding:'10px',
            outline:'none',
            backgroundColor:'#1166f0',
            border:'none',
            color:'white',
            borderRadius:'5px',
            fontSize:'1.2rem',
            marginLeft:"0.5em",
        }}>Submit</button></form>

        <div style={{
            display:'flex',
            justifyContent:'center',
            alineItems:'center',
            marginTop:'4em',
            gap:'25px',
            flexWrap:'wrap',
        }}>

    {/* TOXICITY: {},
    INSULT: {},
    FLIRTATION: {},
    THREAT: {} */}

        <Ring title='TOXICITY' value={(toxic * 100).toFixed(2)}/>
        <Ring title='INSULT'value={(insult * 100).toFixed(2)}/>
        <Ring title='FLIRTATION' value={(flirt * 100).toFixed(2)}/>
        <Ring title='THREAT' value={(threat * 100).toFixed(2)}/>
        </div>


    </div>
  )
}

export default Box