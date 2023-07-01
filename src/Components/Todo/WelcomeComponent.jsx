import { useState } from 'react';
import { useParams, Link} from 'react-router-dom';
import { retrieveHelloWorldBean, retrieveHelloWorldPathVariable } from './API/HelloWorldApiSerice';
import { useAuth } from './Security/AuthContext'


export default function WelcomeComponent() {
    const { username } = useParams();

    const [message, setMessage] = useState(null)

    const authContext = useAuth()

    function callHelloWorldRestApi(){
        console.log("Called api")
        // retrieveHelloWorldBean()
        //     .then( (response) => successResponse(response) )
        //     .catch( ( error) => errorResponse(error) )
        //     .finally( () => console.log("Cleanup") )
        
        retrieveHelloWorldPathVariable('Ranga', authContext.token)
            .then( (response) => successResponse(response) )
            .catch( ( error) => errorResponse(error) )
            .finally( () => console.log("Cleanup Path") )
        
        
    }

    function successResponse(response){
        console.log(response)
        setMessage(response.data.message)
    }
    function errorResponse(error){
        console.log(error)
    }
    return (
        <div className="WelcomeComponent">
        <h1>Welcome , {username}</h1>
        <div>
                Manage your todos - <Link to="/todos">Go here</Link>
        </div>
        <div>
            <button className='btn btn-success m-5 p-3' onClick={callHelloWorldRestApi}>Call Hello World</button>
        </div>
        <div className="text-info">{message}</div>

        </div>
    )
}