import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import styles from './error_boundary.module.scss';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: {}
  };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  onRefreshPage = () => {
    if (this.props.onTryAgain) {
      return this.props.onTryAgain();
    }

    this.setState({ hasError: false });
  };

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div>
          <h1>{error ? error : 'Something went wrong. Stay calm and try again.'}</h1>;
          <Button className={styles.button} label="Try again" onClick={this.onRefreshPage} />
        </div>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorBoundary;
