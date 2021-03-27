import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
  <SpeechProvider appId="ca4e9769-91fa-4a12-a970-35f4e1ab482b" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root'),
);
