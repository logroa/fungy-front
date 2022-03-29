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
          <p>Hey, my name is <b>Richard</b>.  And I'm the Chief Culture Officer at FungeMyTees.  We specialize in 
           both making money and looking really cool while doing it.  I bet you're wondering how I found myself in
           such a distinguished position at such a distinguished company.  Although I could tell you story after story of
           astute day trades, riverboat gambling conquests, and high profile government payoffs, it all boiled down, at least 
           for me, to knowing the definition of the word “fungible”.  Yep, that's it, baby.</p>

          <p>Our goal here is to invest your money in various tokens, coins and other safe, high-yield locations.  Please 
            take a look at our extensive catalogue of inspiringly political, thought-provoking apparel.  All profits will 
            be put in your name towards a mutual fund of sorts aimed at, of course, maximizing return according to our very 
            loose definition of “value”.  Sizable returns will be paid back to investors, and on the off chance we do squander 
            your money, you'll walk away with a shirt wearable in very few social settings!  You're welcome!  Again, my name is <b>Richard</b>.  Look 
            me up!</p>

          <p>Click below to read more about how we got here and what we're hoping to do!</p>
          <br/>
          <button className="gatelock" onClick={() => this.introSwitch("1", "2")} >Read more</button>
          <br/> <br/>
          <button className="gatelock" onClick={() => this.openGate()} >No thanks</button>
          <br /> <br /> <br />
          <a href="https://www.chuckecheese.com/experience/springtastic-celebration/?gclid=CjwKCAjwuYWSBhByEiwAKd_n_pV0gcymV9yBgun4KMCYv_j_wazNYyLL45I8L2eW6fmhooBzs9DVHxoCneQQAvD_BwE&gclsrc=aw.ds">
            Our credentials
          </a>
        </div>
        <div id="intro2">
          Just kidding lol
          <br /><br />
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
