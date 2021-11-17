import CustomTextBox from './CustomTextBox'
import './style.css'
import Draggable from 'react-draggable'
import React from 'react'
import background from "./background.jpg";
import Header from "./Header.js"
import AddTextBoxButton from "./AddTextBoxButton"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      textboxes: [{id: 1, output: (<CustomTextBox className="text" id="1" removeTextBox={() => this.removeTextBox}/>)}], // state array holding data for the Textboxes
    }

    // binding functions to constructor
    this.addTextBox = this.addTextBox.bind(this)
    this.removeTextBox = this.removeTextBox.bind(this)
  }

  // called when "x" button is clicked (DOES NOT WORK) 
  removeTextBox(id) { 
    this.setState(prevState => {
      const updatedTextboxes = prevState.textboxes.filter(item => item.id !== id)
      return {textboxes: updatedTextboxes}
    }) 
  }

  // called when "+" button on bottom right is clicked
  addTextBox() {
    const newId = this.state.textboxes.length + 1
    const newText = [{id: newId, output: (<CustomTextBox className = "text" id={newId} removeTextBox={() => this.removeTextBox}/>)}]
    this.setState({textboxes: this.state.textboxes.concat(newText) })

  }

  render() {
    const textboxOutputs = this.state.textboxes.map((item) => {return item.output}) // creates array with only output parameter in "textboxes" state array

    return (
      <div style={{ backgroundImage: `url(${background})`, width: "100%", height: "800px"}}> 
          <Header /> 
          {textboxOutputs}
          <AddTextBoxButton addTextBox={() => this.addTextBox() /* passes addTextBox function to AddTextBoxButton component */ }/>
           
      </div>
      
    );
  }
}

export default App;
