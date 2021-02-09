import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: {}
  };

  static getDerivedStateFromError(error) {
    this.setState(prevState => ({
      hasError: !prevState.hasError,
      error
    }));
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <h1>{error ? error : 'Something went wrong. Stay calm and try again.'}</h1>;
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorBoundary;
