import Input from './components/Input';
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [query, setQuery] = useState('react');



  /* const inputDefault = {
      value: "react",
      length: 300
  }; */

  const inputDefault2 = {
    query: "react",
    qlength: 300
  };

  const inputQuery = (event) => {
    console.log(event.target.value)
    
  }

  useEffect(() => {
    console.log(query)
    
  }, [query])

  return (
    <div>
      {/* <Input data={inputDefault} /> */}
      {/* <Input query={inputDefault2.query} qlength={inputDefault2.qlength} /> */}
      {/* <Input query={inputDefault2.query} qlength={inputDefault2.qlength} /> */}

      {/* <input onChange={ inputQuery } /> */}
      <input value={query} onChange={ (event) => setQuery(event.target.value) } />

    </div>
   
  );
}

export default App;
