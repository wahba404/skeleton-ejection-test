import React from 'react';
import { Routes, Route } from "react-router-dom";
import { MainSection } from './components/common';

// Skeleton
import { Home } from './components/Home';
// Error catcher
import ErrorBoundary from './ErrorBoundary';

// FontAwesome (global add)
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'
library.add(faHome);

// the mainApi from electron bridge
const mainApi = window.mainApi;

// Main App
class App extends React.Component {

  render() {
    return (
      <div className="flex flex-col w-screen h-screen bg-gray-800 overflow-hidden justify-between">
         <MainSection>
           <Routes>
            <Route path="/" element={
              <ErrorBoundary>
                <Home />
              </ErrorBoundary>
            }/>
          </Routes>
        </MainSection>
      </div>
    );
  }
}

export default App;
