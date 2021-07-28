import Input from './components/Input';
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

const React = require('react');

const Candidates = (props) => {
    console.log(props.candidates);
      
      return (
        <ul>
          {props.candidates.map( (candidate) => {
            return (
               <Candidate candidate={candidate}/>
            )
          })}
        </ul>
      )
            
}


const Candidate = (props) => {
    console.log(props.candidate);
    <li>
      <h2>{props.candidate.name} ({props.candidate.age})</h2>
      <p>Experience: <strong>{props.candidate.experience}</strong></p>
      
    </li>
};

  return (
    <div>
     

    </div>
   
  );
}

export default App;
