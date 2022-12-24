import React, { Component } from 'react';
import Button from './components/Button'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <section className='body-project'>
          <h1>
            Buttons
          </h1>
          <div className='btn-default'>
            <p>{`<Button />`}</p> 
            <p>{`&:hover, &:focus`}</p>
            <div><Button text='Default' className='btn'/>           
            </div>
            <div><Button text='Default' className='btn-def'/>
            </div>
          </div>
          <div className='btn-default'>
            <p>{`<Button variant ='outline'/>`}</p> 
            <p>{`&:hover, &:focus`}</p>
            <div><Button text='Default' className='btn-out'/>           
            </div>
            <div><Button text='Default' className='btn-out-hover' hover=''/>
            </div>
          </div>
          <div className='btn-default'>
            <p>{`<Button variant ='text'/>`}</p> 
            <p>{`&:hover, &:focus`}</p>
            <div><Button text='Default' className='btn-text'/>           
            </div>
            <div><Button text='Default' className='btn-text-hover' hover=''/>
            </div>
          </div>
          <div className='btn-disable'>
            <p>{`<Button variant ='text'/>`}</p> 
            <div><Button text='Default' className='btn disableShadow'/>           
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
