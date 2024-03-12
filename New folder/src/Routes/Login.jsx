import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../Context/AuthContext";
import Dashboard from "./Dashboard";

function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  let {loginUser} = useContext(authContext);
  let navigate = useNavigate();
  async function handleSubmit(e){
    e.preventDefault();
    try {
      let res = await fetch(`https://reqres.in/api/login`,{
        method : "POST",
        headers:{
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        }),
      });
      let finalRes = await res.json();
      // console.log(finalRes.token)
      loginUser(finalRes.token);
      navigate("/dashboard")
      }
     catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <form data-testid="login-form" onSubmit = {(e)=>handleSubmit(e)} >
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email" value = {email} onChange ={(e)=>setEmail(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value = {password}
              onChange ={(e)=>setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
