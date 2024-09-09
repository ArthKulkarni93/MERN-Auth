import { useNavigate } from "react-router-dom"

export default function Home(){
    const navigate = useNavigate();
    function login_Handle(){
        navigate('/auth/login');
    }
    function signup_Handle(){
        navigate('/auth/signup')
    }
    return (
        <>
            <button onClick={login_Handle}>login</button>
            <br />
            <button onClick={signup_Handle}>signup</button>
        </>
    )
}