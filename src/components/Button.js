import React from 'react';
//import ReactDom from 'react-dom/client';
//var textContent = 'Dario Prazeres'

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textContent: this.props.text,
            myStyle : {
                backgroundColor: colorBackground(this.props.color)
            }
        }

    }

    render() {
        return (
            <button style={this.state.myStyle} >{this.state.textContent}</button>
        );
    }
}
function colorBackground(colorChoose){
    var cor 
    switch(colorChoose){
        case 'default': cor ='silver'; break;
        case 'primary': cor ='blue'; break;
        case 'secondary': cor ='yellow'; break;
        case 'danger': cor ='red'; break;
    }
    return cor;
}
export default Button;