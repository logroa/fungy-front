import React from 'react';
import './App.css';
import Closet from './components/Closet';
import { useEffect } from 'react';

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_tab: 0,
      pics: []
    }
  }

  componentDidMount() {
    const { tab } = this.props;

    this.setState({
      current_tab: tab.tab,
      pics: [
        `irwin${Math.floor(Math.random() * 10)}.jpeg`
      ]
    });
    this.introSwitch = this.introSwitch.bind(this);
    this.openGate = this.openGate.bind(this);
    this.randomIrwin = this.randomIrwin.bind(this);

    setInterval(() => {
      this.randomIrwin()
    }, 1000);
  }

  introSwitch(from, to) {
    document.getElementById("intro".concat(from)).style.display = "none";
    document.getElementById("intro".concat(to)).style.display = "block";
  }

  openGate() {
    document.getElementById("introcomp").style.display = "none";
    document.getElementById("aftercomp").style.display = "block";
  }

  randomIrwin() {
    for (let x = 0; x < 8; ++x) {
      this.setState(prevState => {
        prevState.pics.push(
          `irwin${Math.floor(Math.random() * 10)}.jpeg`
        )
        return {
          pics: prevState.pics
        }
      });
    }
  }

  render() {
    const { current_tab, pics } = this.state;
    const site_url = "https://shop.loud.global/products/the-immortal-irwin-s-s-tee";

    let rendered_pics = pics.map((pic) => 
        <img key={pic + (Math.random()*100).toString()} src={process.env.PIC_S3.concat(pic)}
        style={{'position':'absolute', 'top':(Math.random()*80)+'vh', 'left':(Math.random()*80)+'vw', 'width':'200px', 'height':'auto'}} alt="dangit" />
    );

    return (
      <div id="intro" >
        Shirts?
        { rendered_pics }
      </div>
    )
  }
}

function App() {
  const coin = require('./assets/icons/pixal-coin.svg').default;
  const api_url = process.env.REACT_APP_BACKEND_URL.concat('/api/shirts/');

  return (
    <div className="App">

      <meta http-equiv="refresh" content="3;url=https://shop.loud.global/products/the-immortal-irwin-s-s-tee" />
      <audio src={process.env.PIC_S3.concat("Crikey.mp3")} controls autoPlay loop style={{display:"none"}}/>

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
