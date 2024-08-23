import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LibButton } from '../.';

const App = () => {
  return (
    <div>
      <LibButton />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
