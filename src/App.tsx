import React, { FC }  from 'react';
import './App.css';
import { ErrorBoundary, TweetList } from './components';
const App: FC = () => {
  return (
    <div className="App">
      <ErrorBoundary>
        <TweetList />
      </ErrorBoundary>
    </div>
  );
}

export default App;
