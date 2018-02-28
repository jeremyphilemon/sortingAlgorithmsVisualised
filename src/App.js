import React, { Component } from 'react';

import 'bulma/css/bulma.css';
import './App.css';

import BarChart from './components/BarChart';
import Button from './components/Button';
import Footer from './components/Footer';

import feather from 'feather-icons';

import 'bulma-slider/bulma-slider.css';
import 'bulma-slider/slider.js';

const Data = [40, 19, 16, 10, 38, 99 , 43, 53, 94, 14, 
  29, 20, 40, 61, 92, 10, 86, 45, 28, 65, 30, 80, 12, 23, 
  50, 78, 77, 46, 82, 69, 63, 95, 36, 18, 24, 41, 50, 
  60, 68, 31, 42, 13, 93, 88, 56, 85, 32, 51, 90, 43,
  57, 48, 35, 72, 61, 72, 12, 31, 21, 92];

class App extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {data: Data, i: 0, j: 1};

    this.iterate = this.iterate.bind(this);
    this.selectionSort = this.selectionSort.bind(this);
    this.unsort = this.unsort.bind(this);
    this.play = this.play.bind(this);
  }

  componentDidMount() {
    feather.replace();
  }

  unsort() {
    clearInterval(this.timer);
    this.setState({
      data: Data,
      i: 0,
      j: 1
    });
  }

  selectionSort() {
    const data = [...this.state.data];
    let i = this.state.i;
    if(i<data.length-1) {
      let j = this.state.j;
      if(j<data.length) {
        if(data[i]>data[j]) {
          let temp = data[i];
          data[i] = data[j];
          data[j] = temp;
        }
        if(j===data.length-1) {
          j = i+1;
        }
        else {
          j++;
        }
      }
      if(j===data.length-1) {
        i++;
      }
      this.setState({
        data: data,
        i: i,
        j: j
      });
    }
  }

  iterate() {
    this.selectionSort();
  }

  play() {
    clearInterval(this.timer);
    this.timer = setInterval(this.selectionSort, 100);
  }

  handleChange(recieveVal){
    this.bubbleSort();
    document.getElementById('slider').value=recieveVal;
  }

  render() {
    return (
      <div className="App">
        <section className="hero is-white">
          <div className="hero-body">
            <i className="sliders is-pulled-right" data-feather="sliders"/>
            <div className="container">
              <h1 className="title">
                Bubble Sort
              </h1>
              <h2 className="subtitle">
                Using <b>D3.js</b>
              </h2>

              <nav className="level is-mobile">
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Unsort</p>
                    <p className="title">
                      <Button clickFn={this.unsort} icon="bar-chart-2"/>        
                    </p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Next iteration</p>
                    <p className="title">
                      <Button clickFn={this.iterate} icon="chevron-right"/>
                    </p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Play</p>
                    <p className="title">
                      <Button clickFn={this.play} icon="play"/>        
                    </p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Previous iteration</p>
                    <p className="title">
                      <Button clickFn={this.iterate} icon="chevron-left"/>        
                    </p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Sort</p>
                    <p className="title">
                      <Button clickFn={this.iterate} icon="bar-chart"/>    
                    </p>
                  </div>
                </div>
              </nav>

              {/*<input className="slider is-fullwidth is-warning" id="slider" step="1" min="0" max="100" type="range" value="0" onChange={() => {this.handleChange(this.value);}}/>*/}

            </div>
          </div>
        </section>

        <BarChart data={this.state.data} size={[500,500]} meta={[this.state.i, this.state.j]}/>

        <Footer/>

      </div>
    );
  }
}

export default App;
