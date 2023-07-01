import React from 'react'
import PropTypes from "prop-types"


export default function CounterButton( {by, incrementMethod , decrementMethod}) {
    
    /*
    const [count, setCount] = useState(0);
   
    function incrementCounterFunction(){
        console.log("Increment Clicked");
        setCount(count + by);
        console.log(count);
        incrementMethod(by);
    }

    function decrementCounterFunction(){
        console.log("Decrement Clicked");
        setCount(count - by);
        console.log(count);
        decrementMethod(by);
    }*/

  return (
    <div className='Counter'>
        
        <button className='counterButton' onClick={()=>incrementMethod(by)} > increment {by} </button>
        
        <button className='counterButton' onClick={()=>decrementMethod(by)} > decrement {by}</button>
    </div>
  )
}

CounterButton.propTypes = {
  by : PropTypes.number

}
CounterButton.defaultProps = {
  by : 5

}