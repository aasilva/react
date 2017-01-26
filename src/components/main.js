require('normalize.css/normalize.css');
require('styles/app.css');

import React from 'react';
import Table from 'components/table';

class AppComponent extends React.Component {

  _onSubmit(ev) {
    ev.preventDefault();
  }

  render() {

    return (
      <div className="app">
        <h1>
          Relative Permeability
        </h1>

        <div className="content-wrapper">
          <form ref='form' onSubmit={this._onSubmit}>
            <Table />
            <button type="submit" className="btn btn-default" >Apply</button>
          </form>

        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
