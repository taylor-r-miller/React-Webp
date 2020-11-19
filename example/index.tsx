import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css'
import useWebp  from '../src/index';


const App = () => {

  const { supportsWebP } = useWebp()


  return (
    <div className={supportsWebP ? 'bg-webp' : 'bg-jpg'}>
      <h1>{`Background image is ${supportsWebP ? 'webp' : 'jpg'}` }</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
