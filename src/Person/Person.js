import React from 'react';
import  "./Person.css";
import withClass from '../hoc/withClass';
const person = (props)=> {

return (

    <div >  
        <p>My name is  {props.name} and my age {props.age}. My profession is software. My native country {props.native}.
         </p>

         <p> Edit Name: <input type='text'  onChange={props.onChange} /> </p>
    </div>
);

}

export default withClass(person,"Person");