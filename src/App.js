import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
const imagesPath = {
  up: "https://image.shutterstock.com/image-photo/eastern-golden-weaver-building-nest-260nw-1142743562.jpg",
  down: "https://nas-national-prod.s3.amazonaws.com/PODWeaverbird.jpg",
}

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      numberOfVotes: 0,
      seconds: 0,
    }
  }
 

  imageClick = () => {
    console.log('Click!!!!');
    this.setState({
      numberOfVotes: this.state.numberOfVotes + 1,
    }
    );

    this.setState(state => ({ open: !state.open }))

  }

  onStart = () => {
    this.setState({ seconds: this.state.seconds + 1 });
  }
  timer = () => {
    this.f = setInterval(this.onStart, 1000);
    document.getElementById('btn').disabled = true;
  }
  onPause = () => {
    clearInterval(this.f);
  }
  onReset = () => {
    clearInterval(this.f);
    document.getElementById('btn').disabled = false;
    this.setState({ seconds: 0 })
  }

  getImageName = () => this.state.open ? 'up' : 'down'
  getWordName = () => this.state.open ? 'you are up now ⬆️ ' : 'you are down now ⬇️'

  render() {
    const imageName = this.getImageName();
    const imageWord = this.getWordName();


    return (
      <div>
        <div>
          <Card style={{ width: '18rem' }}>
            <img style={{ maxWidth: '300px', maxHeight: '300px' }} src={imagesPath[imageName]}  onClick={this.imageClick} />
            <Card.Body>
              <Card.Title> {imageWord}</Card.Title>
              <Card.Text>
                {this.state.numberOfVotes} raw 🥢
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <h1>{this.state.seconds} seconds 🕰️ </h1>
        <button id='btn' onClick={this.timer}>Start</button>
        <button onClick={this.onPause}>Stop ⏱️</button>
        <button onClick={this.onReset}>Reset ♻️</button>
      </div>
    )
  }
}

export default App

