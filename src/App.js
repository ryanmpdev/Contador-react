import React, { Component } from 'react';
import './App.css';

export default class App extends Component{

  state = {
    numero: 0
  }

  add = () => {
    if(this.state.numero <= 9){
      this.setState({
        numero: this.state.numero + 1
      })
    }
  } 

  menos = () => {
      this.setState({
        numero: this.state.numero - 1
      })
  } 


  render(){
    return(
      <div className='card'>
        <h1>Contador</h1>
        <h2>{this.state.numero}</h2>
        <div className='caixa_btn'>
          <button className='btn_mns' onClick={this.menos}>-</button>
          <button className='btn_mais' onClick={this.add}>+</button>
        </div>
      </div>
    )
  }


}