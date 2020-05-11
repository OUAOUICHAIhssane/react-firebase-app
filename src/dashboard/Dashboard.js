import React, { Component } from 'react';
import pageAceuil from './pageAceuil';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
          <pageAceuil />

          </div>
          <div className="col s12 m5 offset-m1">
            <pageAceuil />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard