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
    const joint = require('./assets/icons/weed-joint-png.png').default;
    const site_url = "https://shop.loud.global/products/grade-aa-baked-potato-tee";
    return (
      <div id="intro">
        <div>
            <h1><b>Funging tees</b> for <a href="https://ozonehouse.org/">Ozone House</a></h1>

            <br/>

            It's a youth shelter and outreach center in Washtenaw County that provides services such as food
            and housing , educational support, mental health services, a 24/7 crisis line, life skills training,
            emergency services, job training, substance abuse support, transportation, and more.

            <br/>
            <br/>

            All profits made from these shirts go directly to creating an immediate impact in the Ann Arbor
            community.  At least I think.  Financial responsibility, book keeping, and just organization in general
            aren't our strong suits.  But we're going to give a try.  You're welcome, kids.

            <br/>
            <br/>

            Are we heroes?  Yeah, probably.  Not everyone can use weed-themed t-shirts and cryptocurrency to
            help children.  I assume most could.  But, hey, that's not everyone.
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <a href={site_url}>
            <img src={joint} className = "App-logo" alt="joint" />
        </a>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
            Hit the joint and help some kids.
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
