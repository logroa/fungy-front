import React from 'react';
import './App.css';
import Closet from './components/Closet';
import { useEffect } from 'react';

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_tab: 0,
      needameal: '',
      finishedmeal: ''
    }
  }

  componentDidMount() {
    const { tab } = this.props;

    this.setState({
      current_tab: tab.tab,
      needameal: 'needameal.png',
      finishedmeal: 'madefood.png',
      silky: 'silky-smooth-landing-page.png'
    });
    this.introSwitch = this.introSwitch.bind(this);
    this.openGate = this.openGate.bind(this);
    // this.randomIrwin = this.randomIrwin.bind(this);
    this.cookMeal = this.cookMeal.bind(this)

  }

  introSwitch(from, to) {
    document.getElementById(from).style.display = "none";
    document.getElementById(to).style.display = "block";
  }

  openGate() {
    document.getElementById("introcomp").style.display = "none";
    document.getElementById("aftercomp").style.display = "block";
  }

  cookMeal() {
    document.getElementById('needameal').className = "shaking";
    document.getElementById('titleinstruction').innerHTML = 'Cooking...'
    setTimeout(() => {this.introSwitch('needameal', 'finishedmeal');
                      document.getElementById('titleinstruction').innerHTML = 'Whew, thank god'}, 5000);
    setTimeout(() => {window.location.replace("https://shop.loud.global/products/the-silky-smooth-get-moving-urban-l-s-tee")}, 7000);
  }

  // randomIrwin() {
  //   for (let x = 0; x < 8; ++x) {
  //     this.setState(prevState => {
  //       prevState.pics.push(
  //         `irwin${Math.floor(Math.random() * 10)}.jpeg`
  //       )
  //       return {
  //         pics: prevState.pics
  //       }
  //     });
  //   }
  // }

  render() {
    const { needameal, finishedmeal, silky } = this.state;
    const site_url = "https://shop.loud.global/products/the-silky-smooth-get-moving-urban-l-s-tee";

    // let rendered_pics = pics.map((pic) => 
    //     <img key={pic + (Math.random()*100).toString()} src={process.env.PIC_S3.concat(pic)}
    //     style={{'position':'absolute', 'top':(Math.random()*80)+'vh', 'left':(Math.random()*80)+'vw', 'width':'200px', 'height':'auto'}} alt="dangit" />
    // );

    return (
      <div id="intro" >

        <div>
         <img id="needameal" src={process.env.PIC_S3.concat(silky)} alt="problem"
          style={{'width': '70vw', 'height': 'auto', 'display': 'block', 'margin': 'auto'}}/>
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

      <meta http-equiv="refresh" content="4;url=https://shop.loud.global/products/the-silky-smooth-get-moving-urban-l-s-tee" />

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
