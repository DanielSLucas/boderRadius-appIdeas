import React from 'react';
import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topLeft: 0, 
      topRight: 0, 
      botLeft: 0, 
      botRight: 0,
    }

    this.handleInputChange  = this.handleInputChange.bind(this);
    this.handleSubmit       = this.handleSubmit.bind(this);
    this.handleClick        = this.handleClick.bind(this);
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

    const {topLeft} = this.state;
    const {topRight} = this.state;
    const {botLeft} = this.state;
    const {botRight} = this.state;

    document.getElementById('theDiv').style.borderTopLeftRadius = topLeft.toString() + "px";
    document.getElementById('theDiv').style.borderTopRightRadius = topRight.toString() + "px";
    document.getElementById('theDiv').style.borderBottomLeftRadius = botLeft.toString() + "px";
    document.getElementById('theDiv').style.borderBottomRightRadius = botRight.toString() + "px";
 
  }

  handleClick() {
    var css = document.getElementById("theCSS");

    css.select();
    css.setSelectionRange(0, 999999)
    document.execCommand("copy");
    // alert("Copied the text: " + css.value);


    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + css.value;
  }

  render () {
    return(
      <div className="main-container">
         
        <h1>Border-radius previewer</h1>

        <main>

          <div className="css-container"> 
            <input 
              id="theCSS"
              value={this.state.topLeft + " " + this.state.topRight + " " + this.state.botLeft + " " + this.state.botRight} 
            /> 
              
            <button onClick={this.handleClick} type="button" >
              <span className="tooltiptext" id="myTooltip">Copy to clipboard</span>
              Copiar              
            </button>
          </div>


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

          
          <div  
            id="theDiv"  
            // style={{
            //   borderTopLeftRadius: this.state.topLeft,
            //   borderTopRightRadius: this.state.topRight,
            //   borderBottomLeftRadius: this.state.botLeft,
            //   borderBottomRightRadius: this.state.botRight,
            // }} 
          >
          </div>
          

          
        </main>

      </div>
    );
  }
    
}

export default App;
