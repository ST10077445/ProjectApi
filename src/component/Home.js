import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';

function Home() {
    

    const fetchData =() => {
      axios.post('http://localhost:8080/auth/login', {
        headers: {
          "Authorization": "Basic bXVzYTpwYXNzd29yZA==",
          "Content-Type": "application/json",
          "Cookie": "JSESSIONID=575B3B96641FA16F85FC1A1C7E68EB7A"
        }
      },{
        body: {
          username: "musa",
          password: "password"
      }}).then(response => {
        if (response.status === 200) {
          console.log("All OK")
      }
    })
         
    }
  return (
    <div>
        <h2>hwllo</h2>
        <button className='btn btn-warning' onClick={fetchData}>getPermission</button>
    </div>
  )
}

export default Home