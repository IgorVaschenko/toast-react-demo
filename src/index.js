import React from 'react';
import ReactDOM from 'react-dom';

import App from '@/components/App/App';
import toast from "@/containers/ToastCore/ToastClass";
import ToastContainer from "@/components/Toast/ToastContainer";

let root = document.createElement('div');
root.id = "root";
document.body.prepend(root);

ReactDOM.render(<App />, document.querySelector('#root'));

export {
    toast,
    ToastContainer
}
