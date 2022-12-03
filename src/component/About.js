import React from 'react'
import {useState} from 'react'
import axios from 'axios';

function About() {
    const [accounts, setAccounts] = useState([]);

    const fetchAccounts =()=> {
      axios.post("http://localhost:8080/auth/login",{
        withCredentials: true,
        headers: {
          "Accept": "application/json",
          "Authorization": "Basic bXVzYTpwYXNzd29yZA==",
          "Content-Type": "application/json",
          "Cookie": "JSESSIONID=575B3B96641FA16F85FC1A1C7E68EB7A"
        }
        }, {
        auth: {
          username: "musa",
          password: "password"
        }
      })
        .then((ress) => {
          console.log(ress.data)
          setAccounts(ress.data);
        })
        .catch(err => console.log(err));
    }
  return (
    <div>
        <div class="container">
		<div>
			<h2 class="form-signin-heading">Please sign in</h2>
			<p>
				<label for="username" class="sr-only">Username</label>
				<input type="text" id="username" name="username" class="form-control" placeholder="Username" required autofocus/>
        </p>
				<p>
					<label for="password" class="sr-only">Password</label>
					<input type="password" id="password" name="password" class="form-control" placeholder="Password" required/>
        </p>
					<input name="_csrf" type="hidden" value="3xJI5CGIj6Pk8g6QsY2NbNF_5ctoKm_85N7qdf0hhCJiAqKE6Cp50xm565fJxm-k1aC5CegdyPJbSFjRhr_SFslE4hVaNMDg" />
					<button class="btn btn-lg btn-primary btn-block" type="submit" onClick={fetchAccounts}>Sign in</button>
          </div>
	</div>

        <button onClick={fetchAccounts}>go to Home page</button>
    </div>
  )
}

export default About