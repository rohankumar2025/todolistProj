import React from 'react'
import './style.css'
import bubble from './bubble.png'
import Draggable from 'react-draggable'


class CustomTextBox extends React.Component {
    constructor(props) {
        super()
        this.state = {
            toDoItem: "", 
            mouseOnText: false,
            boxH_W: 300,
            boxTop: 175,
            boxLeft: 150,
            sizeButtonPlacement: 150
        }

        // binds for functions
        this.handleChange=this.handleChange.bind(this)
        this.setMouseOnTextTrue=this.setMouseOnTextTrue.bind(this)
        this.setMouseOnTextFalse=this.setMouseOnTextFalse.bind(this)
        this.increaseBoxSize=this.increaseBoxSize.bind(this)
        this.decreaseBoxSize=this.decreaseBoxSize.bind(this)
    }

    handleChange(event) { // handles changes in the textbox when things are typed
        const {name, value, type, checked} = event.target
        type !== "checkbox" ? this.setState({[name]: value}) : this.setState({[name]: checked})
    
    }

    setMouseOnTextTrue() { // function displays 'x' button when mouse is above textbox
        this.setState({
            mouseOnText: true
        })
    }

    setMouseOnTextFalse() { // function removes 'x' button when mouse is not above textbox
        setTimeout(() => // adds delay before removing 'x' button
        this.setState({
            mouseOnText: false
        }), 4000)
    }

    increaseBoxSize() {
        this.setState(prevState => {
            const updatedH_W = prevState.boxH_W * 1.1
            const updatedTop = prevState.boxTop * 1.07
            const updatedLeft = prevState.boxLeft * 1.1 
            const updatedSizeButton = prevState.sizeButtonPlacement * 1.1    
            return { 
                boxH_W: updatedH_W,
                boxTop: updatedTop,
                boxLeft: updatedLeft,
                sizeButtonPlacement: updatedSizeButton
            }
        })
    }

    decreaseBoxSize() {
        this.setState(prevState => {
            const updatedH_W = prevState.boxH_W / 1.1
            const updatedTop = prevState.boxTop / 1.07
            const updatedLeft = prevState.boxLeft / 1.1 
            const updatedSizeButton = prevState.sizeButtonPlacement / 1.1       
            return { 
                boxH_W: updatedH_W,
                boxTop: updatedTop,
                boxLeft: updatedLeft,
                sizeButtonPlacement: updatedSizeButton
            }
        })
    }

    render() {
        let buttons;
        // displays button based on mouseOnText variable
        if (this.state.mouseOnText) {
            buttons = <div> 
                        <button className="x-button" onClick={this.props.removeTextBox(this.props.id)}>x </button> 
                        <button className="increaseSizeButton" style={{left: this.state.sizeButtonPlacement}} onClick={this.increaseBoxSize}>+</button>
                        <button className="decreaseSizeButton" style={{left: this.state.sizeButtonPlacement-20}} onClick={this.decreaseBoxSize}>-</button>
                      </div>        
        } 
        else { buttons = null }

        return (
                <Draggable >
                    <div className="box">
                            <img 
                                src={bubble} 
                                alt="To Do" 
                                className='bubble'
                                style={{height: this.state.boxH_W*0.75, width: this.state.boxH_W}}/> {/* bubble image */}
                                
                            <form>
                                <textarea 
                                    placeholder={this.props.id} 
                                    name="toDoItem"
                                    onChange= {this.handleChange}
                                    value= {this.state.toDoItem}
                                    className="text-block"
                                    rows= "6"
                                    onMouseEnter={this.setMouseOnTextTrue}
                                    onMouseLeave={this.setMouseOnTextFalse}
                                    style={{top: this.state.boxTop, left: this.state.boxLeft}}
                                />
                            </form>

                            {buttons}
                            

                    </div>
                </Draggable>

        )
    }
}

export default CustomTextBox