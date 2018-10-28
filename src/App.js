import React, { Component } from 'react';
import Title from './component/Title';
import Table from './component/Table';

class App extends Component {
  render() {
    return (
      <div className="psim-app">
        <div className="psim-map-container">
        </div>
        <div className="psim-title-container">
            <Title/>
        </div>
        <div className="psim-table-container">
            <Table/>
        </div>
      </div>
    );
  }
}

export default App;
