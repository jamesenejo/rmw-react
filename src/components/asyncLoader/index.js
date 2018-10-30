import React, { Component } from 'react';

const asyncLoader = (importComponent) => {
  class AsyncLoader extends Component {
    state = { component: null }

    componentDidMount() {
      importComponent()
        .then(comp => this.setState({ component: comp.default }));
    }

    render() {
      const ImportedComponent = this.state.component;

      return ImportedComponent ? <ImportedComponent {...this.props} /> : null;
    }
  }

  return AsyncLoader;
};

export default asyncLoader;
