import React from 'react';
import ReactDOM from 'react-dom';

import App from '@/components/App/App';

let root = document.createElement('div');
root.id = "root";
document.body.prepend(root);

ReactDOM.render(<App />, document.querySelector('#root'));

