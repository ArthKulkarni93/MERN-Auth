import { useNavigate } from "react-router-dom";
export default function Dashboard(){
    const navigate = useNavigate();
    function logout(){
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        navigate('/auth/login');
    }
    return(
        <>
            <h3>hi there </h3>
            <br />
            <button onClick={logout}>logout</button>
        </>
    )
}