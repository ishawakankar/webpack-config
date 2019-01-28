
console.log("It works!");
 if (process.env.NODE_ENV !== 'production') {
       console.log('Looks like we are in development mode!');
     }
     else if(process.env.NODE_ENV==='production'){
         console.log("we are in production mode")
     }

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

ReactDOM.render(
    <App />,
    document.getElementById('root')
    );

