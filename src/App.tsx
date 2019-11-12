import React, { FC }  from 'react';
import './App.css';
import { TweetList } from './components';
const App: FC = () => {
  return (
    <div className="App">
      <TweetList />
    </div>
  );
}

export default App;
