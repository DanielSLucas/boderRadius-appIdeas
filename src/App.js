import React, { useState } from 'react';
import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topLeft: 0, 
      topRight: 0, 
      botLeft: 0, 
      botRight: 0,
      altered: false,
    }

    this.handleInputChange  = this.handleInputChange.bind(this);
    this.handleSubmit       = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    // const {topLeft} = this.state;
    // const {topRight} = this.state;
    // const {botLeft} = this.state;
    // const {botRight} = this.state;

    this.setState({
      altered: true,
    })
  }

  render () {
    return(
      <div className="main-container">
         
        <h1>Border-radius previewer</h1>

        <main>
          <form onSubmit={this.handleSubmit}>
            <input
              type="number"
              name="topLeft" 
              value={this.state.topLeft} 
              onChange={this.handleInputChange}
            />

            <input
              type="number"
              name="topRight" 
              value={this.state.topRight} 
              onChange={this.handleInputChange}
            />

            <input
              type="number"
              name="botLeft" 
              value={this.state.botLeft} 
              onChange={this.handleInputChange}
            />

            <input
              type="number"
              name="botRight" 
              value={this.state.botRight} 
              onChange={this.handleInputChange}
            />

            <button type="submit">Aplicar</button>

          </form>

          <hr/>

          {this.state.altered ? (
            <div  
              className="theDiv"  
              style={{
                borderTopLeftRadius: this.state.topLeft,
                borderTopRightRadius: this.state.topRight,
                borderBottomLeftRadius: this.state.botLeft,
                borderBottomRightRadius: this.state.botRight,
              }} 
            >
            </div>
          ): (
            <div  
              className="theDiv"  
              style={{
                borderTopLeftRadius: this.state.topLeft,
                borderTopRightRadius: this.state.topRight,
                borderBottomLeftRadius: this.state.botLeft,
                borderBottomRightRadius: this.state.botRight,
              }} 
            >
            </div>
          ) }

          
        </main>

      </div>
    );
  }
    
}

export default App;
