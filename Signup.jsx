import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Signup(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [username,setUsername] = useState('');

    const navigate = useNavigate();
    function home_Handle(){
        navigate('/');
    }
    function login_Handle(){
        navigate('/auth/login')
    }
    function call(){
        axios.post("http://localhost:3000/auth/signup",{email,password,username})
        .then((response)=>{
            console.log(response);
            const { data } = response;
            if(data.success) navigate('/Dashboard')
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
            <input type="text" 
            placeholder="enter username"
            onChange={(e)=>setUsername(e.target.value)}/>
            <br />
            <button onClick={call}>signup to app</button>
            <br />
            <button onClick={login_Handle}>login</button>
            <br />
            <button onClick={home_Handle}>home</button>

        </>
    )
}