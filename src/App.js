import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './Components/UserInput/UserInput';
import ValidationComponent from './Components/ValidationComponent/ValidationComponent';
import CharComponent from './Components/CharComponent/CharComponent';
import Radium, { StyleRoot } from 'radium';

class App extends Component {

  usernameChangedHandler = (event) => {
    this.setState({name: event.target.value});

  }
  state = {
    name: ''
  }
  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice();
    const persons = this.state.name;
    const textonuevo = persons.split('');
    textonuevo.splice(index, 1);
    const nuevotexto = textonuevo.join('');
    this.setState({name: nuevotexto});
  }
  componentWillMount () {
     console.log( '[App.js] Inside componentWillMount()' );
  }

  componentDidMount () {
     console.log( '[App.js] Inside componentDidMount()' );
  }

   


  render() {
    let caracteres='';
    let componente=null;
    caracteres=this.state.name.split('');
    let nombre=this.state.name;
    componente = (
      <div>
        {caracteres.map((nombre,index) => {
          return <CharComponent
          click={() => this.deletePersonHandler(index)}
          name={nombre} 
          key={index}
          />
        })}
      </div>

    );
        const style2={
          backgroundColor: 'red'
          };
          if(this.state.name.length<5){
            style2.backgroundColor='blue';
            }
    return (
        <StyleRoot>
        <div className="App" >
        <UserInput  changed={this.usernameChangedHandler} currentName={this.state.name} />
        {componente}
        <ValidationComponent longitud={this.state.name.length} style={style2}/>
        </div>
        </StyleRoot>

    );
  }
}

export default Radium( App );
