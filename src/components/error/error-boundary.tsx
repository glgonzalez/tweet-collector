import React, {Component, Fragment} from 'react';

export class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null
  }
  constructor(props: any) {
    super(props);
  };

  componentDidCatch(error: any) {
    this.setState({
      error,
      hasError: true
    });
  }

  render() {
    if(this.state.hasError) {
      return (
        <Fragment>
          Something Went Wrong!
        </Fragment>
      );
    }

    return this.props.children;
  }
}