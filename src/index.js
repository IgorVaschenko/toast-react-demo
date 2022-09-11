import React from 'react';
import ReactDOM from 'react-dom';

import App from '@/components/App/App';
import toast from "@/containers/ToastCore/ToastClass";
import ToastContainer from "@/components/Toast/ToastContainer";

ReactDOM.render(<App />, document.querySelector('#root'));

export {
    toast,
    ToastContainer
}
