import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
      }
  
    render() {
      if (this.state.hasError) {
        return <p>too many results!</p>;
      }
      return this.props.children; 
    }
  }

  export default ErrorBoundary;