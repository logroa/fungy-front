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
          <p>Hey, my name is <b>Oscar</b>. And I'm the Chief Culture Officer at FungeMyTees. We specialize in 
           making money and looking really cool while doing it. To give you a better idea of who I am and how I found myself
           in such a distinguished position, I could go straight down my resume, detailing story after story of
           astute day trades, riverboat hold 'em coolers, and high profile government payoffs. But in reality for me, 
           it all boiled down to knowing the definition of the word “fungible”. Yep, that's it, baby.</p>

          <p>What we're asking of you here is to join our community. Like any community, financial institution, or clothing
            provider, our goal is to simply provide value.  We are selling t-shirts with a side of digital currency. Or vice 
            versa if you prefer. Every shirt bought comes with its own unique NFT that will be made available to the owner
            of the corresponding shirt. Does this physical attachment defeat the purpose of the nonfungible token we're 
            providing? Probably, but we can't say for sure. That would require us actually understanding them and how they 
            work, which, I cannot emphacize enough, we don't.</p>

          <p>This opportunity comes to you free of risk.  All this site is doing presenting the opportunity to confirm interest 
            politically efficacious, thought-provoking apparel, invest in cryptocurrency, or join a community full of former 
            US Secretaries of Agriculture, martial arts champions, and degenerate sportsbettors free of charge. Payment will come
            later when shirts are printed and tokens are minted, if you are still even interested.  All profits will be put in your 
            name towards a cryptocurrency hedgefund of sorts.  Is this an excuse to day-trade crypto with my buddies?  Absolutely. 
            But it's also about making friends and making you think I'm really smart. Sizable returns will be paid back to investors, 
            and on the off chance we do squander your money, you'll walk away with a shirt wearable in very few social settings!  You're 
            welcome!  Again, my name is <b>Oscar</b>. Look me up!</p>

          <p>Click below to read more about how we got here and what we're hoping to do!</p>
          <br/>
          <button className="gatelock" onClick={() => this.introSwitch("1", "2")} >Read more</button>
          <br/> <br/>
          <button className="gatelock" onClick={() => this.openGate()} >No thanks, just show me the shirts, guy</button>
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
          <img src={coin} className="App-logo" alt='logo' />
          <h1>FungeMyTees.com</h1>
        </header>
        <Closet url={api_url} className='following'/>
      </div>
    </div>
  );
}

export default App;
