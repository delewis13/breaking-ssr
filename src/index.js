import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const main = async () => {
  ReactDOM.hydrate(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

main()