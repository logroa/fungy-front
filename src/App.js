import React from 'react';
import './App.css';
import Closet from './components/Closet';

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_tab: 0
    }
  }

  componentDidMount() {
    const { tab } = this.props;
    this.setState({
      current_tab: tab.tab
    });
    this.introSwitch = this.introSwitch.bind(this);
    this.openGate = this.openGate.bind(this);
  }

  introSwitch(from, to) {
    document.getElementById("intro".concat(from)).style.display = "none";
    document.getElementById("intro".concat(to)).style.display = "block";
  }

  openGate() {
    document.getElementById("introcomp").style.display = "none";
    document.getElementById("aftercomp").style.display = "block";
  }

  render() {
    const { current_tab } = this.state;

    return (
      <div id="intro">
        <div id="intro1">
          weird funny spiel
          <br/>
          <button className="gatelock" onClick={() => this.introSwitch("1", "2")} >Continue</button>
          <br/>
          <button className="gatelock" onClick={() => this.openGate()} >Buy shirt</button>
        </div>
        <div id="intro2">
          Just kidding lol
          <br />
          <button className="gatelock" onClick={() => this.introSwitch("2", "1")} >Yikes</button>
        </div>
      </div>
    )
  }
}

function App() {
  const coin = require('./assets/icons/pixal-coin.svg').default;
  const api_url = process.env.REACT_APP_BACKEND_URL.concat('/api/shirts/');

  return (
    <div className="App">
      <div className='layer' id="introcomp">
        <Intro tab={0}/>
      </div>
      <div className='layer' id="aftercomp">
        <header className="App-header">
          <img src={coin} className="App-logo" alt="logo" />
          <h1>FungeMyTees.com</h1>
        </header>
        <Closet url={api_url} className='following'/>
      </div>
    </div>
  );
}

export default App;
