import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

const ppl = ['tomek', 'albert', 'zenon', 'bartek', 'hieronim'];

class App extends Component {
  constructor() {
    super()
    this.state = {
      'ppl': ppl
    }
  }

  getString = (e) => {
    const str = e.target.value;
    const filteredPpl = this.filterVal(str);
    this.setState({
      'ppl': filteredPpl
    })
  }

  filterVal(str) {
    return ppl.filter(el => el.includes(str));
  }

  render() {
    return (
      <div className="App">
        <input type="text" onInput={this.getString}/>
        <ShowItems items={this.state.ppl}/>
      </div>
    );
  }
}

const ShowItems = ({items=[]}) => {
  if (items.length > 0) {
    return items.map((el,i) => <li key={i}>{el}</li>)
  } else {
    return 'No results!'
  }
}

export { App, ShowItems }
