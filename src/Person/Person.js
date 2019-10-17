import React from 'react';
import  "./Person.css";
const person = (props)=> {

return (

    <div className="Person">  
        <p>My name is  {props.name} and my age {props.age}. My profession is software. My native country {props.native}.
         </p>

         <p> Edit Name: <input type='text'  onChange={props.onChange} /> </p>
    </div>
);

}

export default person;