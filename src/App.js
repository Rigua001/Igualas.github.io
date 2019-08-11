import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import CardList from "./Components/CardList";

class App extends Component{
    state={
        projects:[
            {
                name: 'Twitch-TLS',
                url: 'https://twitch-tls.herokuapp.com/',
                pic: 'images/twitchtls.gif'
            }
        ]
    }

  render(){
    return (
        <div className="App">
            <CardList projects = {this.state.projects}/>
        </div>
    );
  }
}

export default App;
