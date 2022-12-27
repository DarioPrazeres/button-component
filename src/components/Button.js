import React from 'react';
//import ReactDom from 'react-dom/client';
//var textContent = 'Dario Prazeres'

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textContent: this.props.text,
            myStyle:{
                display: endIcon(this.props.startIcon),
                width: '13px',
                height: '14px'
            },
            myStyle1:{
                display: endIcon(this.props.endIcon),
                width: '14px',
                height: '14px'
            },
            myStyleButton:{
                width: widthButton(this.props.startIcon, this.props.endIcon)
            }
        }
    }

    render() {
        return (
            <button style={this.state.myStyleButton} disabled={this.props.disabled} className={this.props.className} >
                <img style={this.state.myStyle} src={this.props.startIcon} alt='initial icon' />{this.state.textContent}
                <img style={this.state.myStyle1}  src={this.props.endIcon} alt='End icon' />
            </button>
        );
    }
}
function endIcon(icon){ 
    if(icon){
        return 'block';
    }else{
       return 'none'; 
    }
    
}
function widthButton(iconStart, endIcon){
    if(iconStart || endIcon){
        return '105px';
    }else{
        return '86px';
    }
}
export default Button;