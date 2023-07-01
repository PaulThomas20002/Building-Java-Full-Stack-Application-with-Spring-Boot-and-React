import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useAuth } from './Security/AuthContext';

export default function LoginComponent() {

    const [username, setUsername] = useState('in28minutes')

    function handleUsernameChange(event){
            setUsername(event.target.value);
    }

    const [password, setPassword] = useState('')

    function handlePasswordChange(event){
        setPassword(event.target.value);
    }

    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const navigate = useNavigate()
    
    const authContext = useAuth()

    async function handleSubmit(){
        if(await authContext.login(username, password)){
            navigate(`/welcome/${username}`)
        } else {
            setShowErrorMessage(true)
        }
    }
 
    function ErrorMessageComponent(){
        if(showErrorMessage) {
            return <div className="errorMessage">Authentication Failed. Please check your credentials.</div>
        }
        return null   
    }

    return (
        <div className="Login">
            <div className="LoginForm">
                <div>
                    <h1>Time to Login!</h1>
                    <label>User Name:</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>
            {showErrorMessage && <div className="errorMessage">Authentication Failed. Please check your credentials.</div>}
            <ErrorMessageComponent />
        </div>
    )
}