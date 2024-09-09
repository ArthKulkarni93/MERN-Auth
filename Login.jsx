import axios from "axios";
import { useNavigate } from "react-router-dom"
import { useState } from "react";

export default function Login(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate();
    function home_Handle(){
        navigate('/');
    }
    function signup_Handle(){
        navigate('/auth/signup')
    }
    function call(){
        axios.post("http://localhost:3000/auth/login",{email,password})
        .then((response)=>{
            console.log(response);
            const { data } = response;
            if(data.success==="true") {
                localStorage.setItem('token', data.token);
                localStorage.setItem('username',data.username)
                navigate('/Dashboard')    
            }
        })
        .catch((e)=>{
            console.log("error in signingup")
        })
    }
    return(
        <>
            <input type="text" 
            placeholder="enter email"
            onChange={(e)=>setEmail(e.target.value)}/>
            <br />
            <input type="text" 
            placeholder="enter password"
            onChange={(e)=>setPassword(e.target.value)}/>
            <br />
            <button onClick={call}>login to app</button>
            <br />
            <button onClick={signup_Handle}>signup</button>
            <br />
            <button onClick={home_Handle}>home</button>

        </>
    )
}