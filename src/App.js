import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from  './Person/Person';

class App extends Component {

  constructor(props){
    super(props);
    console.log("[App.js] constructor");

  }

  static getDerivedStateFromProps(prevProps,prevState){
    console.log("[App.js] getDerivedStateFromProps");
    return prevState;
  }

  shouldComponentUpdate(newProps, newState){
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("[App.js] getSnapshotBeforeUpdate");
  }

  componentDidUpdate(){

    console.log("[App.js] componentDidUpdate");
  }
  componentDidMount(){
    console.log("[App.js] componentDidMount");
  }



  state ={ persons : [ {name:"Ashok", age:"38", country:"India" },
  {name:"Haasini", age:"4", country:"Canada" },
  {name:"Arjun", age:"2", country:"Canada" }
   ]   };

  nameChangeHandler = (event,index)=>{

    console.log(event.target.value);
    console.log(index);
    const person =  {...this.state.persons[index] };
    person.name=event.target.value;
    const allpersons = [...this.state.persons];
    allpersons[index]=person;
    this.setState({persons:allpersons });
    //console.log(event.target.value);
      /*this.setState({ persons : [ {name:event.target.value, age:"38", country:"India" },
      {name:"Haasini", age:"4", country:"Canada" },
      {name:"Arjun", age:"2", country:"Canada" }
       ]   } );
*/

  }
  render() {
    console.log("[App.js] render");
    const persons = this.state.persons.map( (p,index) => {

        return  (<Person name= {p.name} age={p.age} native={p.country} onChange={(event) => this.nameChangeHandler(event,index)}  key={index} />  );
    });
      

    return (
      <div className="App">
      
        {persons}
      </div>
    );
  }
}
 /* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} native={this.state.persons[0].country} onChange={this.nameChangeHandler} />

 <Person name={this.state.persons[1].name} age={this.state.persons[1].age} native={this.state.persons[1].country} onChange={this.nameChangeHandler} >

 <Person name={this.state.persons[2].name} age={this.state.persons[2].age} native={this.state.persons[2].country} onChange={this.nameChangeHandler} />  */
export default App;
