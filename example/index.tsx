import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import useWebp  from '../src/index';

const App = () => {

  const {supportsWebP} = useWebp()
  const success = 'this browser supports webp'
  const failure = 'this broswser does not support webp'

  return (
    <div>
      <h1>{supportsWebP ? success: failure }</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
