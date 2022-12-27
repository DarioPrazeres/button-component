import React, { Component } from 'react';
import Button from './components/Button';
import shop from './img/shop.png';
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
            <div><Button text='Default' className='btn btn-hover'/>
            </div>
          </div>
          <div className='btn-default'>
            <p>{`<Button variant ='outline'/>`}</p> 
            <p>{`&:hover, &:focus`}</p>
            <div><Button text='Default' className='btn btn-out-primary'/>           
            </div>
            <div><Button text='Default' className='btn btn-out-primary-hover'/>
            </div>
          </div>
          <div className='btn-default'>
            <p>{`<Button variant ='text'/>`}</p> 
            <p>{`&:hover, &:focus`}</p>
            <div><Button text='Default' className='btn btn-text btn-text-primary'/>           
            </div>
            <div><Button text='Default' className='btn btn-text btn-text-primary-hover'/>
            </div>
          </div>
          <div className='btn-disable'>
            <p>{`<Button disableShodaw/>`}</p> 
            <div><Button text='Default' className='btn btn-primary disableShadow disable'/>           
            </div>
          </div>
          <div className='btn-default'>
            <p>{`<Buton disabled />`}</p> 
            <p>{`<Button variant ='text' disabled/>`}</p>
            <div><Button text='Default' className='btn' disabled='disabled'/>           
            </div>
            <div><Button text='Default' className='btn btn-text' disabled='disabled'/>
            </div>
          </div>
          <div className='btn-default'>
            <p>{`<Button startIcon = "local_grocery_strore"/>`}</p> 
            <p>{`<Button endIcon = "local_grocery_strore"/>`}</p>
            <div><Button startIcon={shop} text='Default' className='btn btn-primary'/>           
            </div>
            <div><Button endIcon={shop} text='Default' className='btn btn-primary' />
            </div>
          </div>
          <div className='section-btn-size'>
            <p>{`<Buton size='sm' />`}</p> 
            <p>{`<Button size='md' />`}</p>
            <p>{`<Button size='lg' />`}</p>
            <div><Button text='Default' className='btn btn-primary btn-sm'/>           
            </div>
            <div><Button text='Default' className='btn btn-primary btn-md'/>
            </div>
            <div><Button text='Default' className='btn btn-primary btn-lg'/>
            </div>
          </div>
          <div className='section-btn-default'>
            <p>{`<Buton color='default' />`}</p> 
            <p>{`<Button color='primary' />`}</p>
            <p>{`<Button color='secondary' />`}</p>
            <p>{`<Button color='danger' />`}</p>
            <div><Button text='Default' className='btn'/>           
            </div>
            <div><Button text='Default' className='btn btn-primary' hover=''/>
            </div>
            <div><Button text='Default' className='btn btn-secondary' hover=''/>
            </div>
            <div><Button text='Default' className='btn btn-danger' hover=''/>
            </div>
            <div><Button text='Default' className='btn btn-hover' hover=''/>
            </div>
            <div><Button text='Default' className='btn btn-primary-hover' hover=''/>
            </div>
            <div><Button text='Default' className='btn btn-secondary-hover' hover=''/>
            </div>
            <div><Button text='Default' className='btn btn-danger-hover' hover=''/>
            </div>
          </div>
        </section>
        <footer>
          <p>Created by <a href="https://github.com/DarioPrazeres">Dario Prazeres</a> -DevChallenges.io</p> 
        </footer>
      </div>
    );
  }
}

export default App;
