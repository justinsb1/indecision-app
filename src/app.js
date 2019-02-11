// ES6 - import used to add other files. provide relativ path from app.js to the other file. "./" bring you to the current file's directory

// install modules -> import -> use . get code to functions we didn't write ourselves(npmjs.com/package/) for documentation on how to import
// the docs will show you all the functions you have access to from the validator module

// // import default export validator 
// import validator from 'validator';

// console.log(validator.isEmail('test'));


// exports - default export and named exports 

// named export. not an object definition. put in here references to things we want to export. 
// export { square, add, subtract as default };

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisonApp';



// instead of rendering a variable, you can compose a React Component
// can go ahead and define options prop to contain certain values
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


// // can go ahead and define options prop to contain certain values
// ReactDOM.render(<IndecisionApp options={['1', '2', '3']}/>, document.getElementById('app'));