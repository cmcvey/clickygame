import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    clicked: [],
    topScore: 0,
    images: new Array(12).fill(0).map((_, i) => `images/poke${i+1}.jpeg`),
    msg: 'Click something!'
  }

  onClick = event => {
    const {src} = event.target
    if (this.state.clicked.includes(src)) {
      this.setState({
        clicked: [],
        topScore: this.state.topScore < this.state.clicked.length ? this.state.clicked.length : this.state.topScore,
        msg: 'You lose!'
      })
    } else {
      this.setState({
        clicked: this.state.clicked.concat(src),
        topScore: this.state.topScore < this.state.clicked.length ? this.state.clicked.length : this.state.topScore,
        msg: 'Awesome!'
      })
    }
  }

  shuffleArray(images) {
    for (let i = images.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }
  }

  render() {
    const { topScore, clicked, images, msg } = this.state
    this.shuffleArray(images)

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clicky Game</h1>
          <strong>{msg}</strong><br/>
          <strong>Top Score:{topScore}</strong>
          <strong>Score:{clicked.length}</strong>

        </header>

        {images.map(src => <img onClick={this.onClick} src={src} />)}

      </div>
    );
  }
}

export default App;
