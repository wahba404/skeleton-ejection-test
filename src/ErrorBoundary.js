import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
    //   logErrorToMyService(error, errorInfo);
      console.log(error);
    }
  
    render() {
      if (this.state.hasError) {
        
        return (
            <div className="flex flex-col h-screen w-full p-10 justify-center items-center">
                <span className="text-6xl text-gray-700 font-bold">Oof.</span>
            </div>
        );
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;