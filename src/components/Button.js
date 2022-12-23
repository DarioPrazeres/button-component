import React from 'react';
//import ReactDom from 'react-dom/client';
//var textContent = 'Dario Prazeres'

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textContent: this.props.text,
        }

    }

    render() {
        return (
            <button className={this.props.className} >{this.state.textContent}</button>
        );
    }
}
export default Button;