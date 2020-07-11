import React, { Component, useState, useEffect } from 'react';
import * as data from './App.css';
import 'semantic-ui-css/semantic.min.css'



const App = () => {

  

  const [data, setData] = useState('');

  const renderComments = () => {
    return data.map((da, i) => {
      return <li key={da.nam}>{da.name}</li>
    })
  }

  const dataLookUp = () => {

  }

  return (
    <div>
      <div id='search-bar'>
        <div>Input search items separated by space</div>
        <input></input>
        <button onClick={dataLookUp}>Search</button>
      </div>
    </div>
  );

}






export default App;
