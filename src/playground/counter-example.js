let count = 0;
// button onClick attribute is a JavaScript expression
// addOne is an arrow function that can be used in an attribute
// can also define the function in the attribute instead of explicitly
const addOne = () => {
    count++;
    // must render the app again after each data change
    renderCounterApp();
};

// minus one function
const minusOne = () => {
    count--;
    renderCounterApp();
};

// reset function
const reset = () => {
    count = 0;
    renderCounterApp();
};

// // JSX does not have built in data binding
// const templateTwo = (
//     <div>
//         <h1> Count: {count} </h1>
//         <button onClick={addOne}> +1 </button> 
//         <button onClick={minusOne}> -1 </button>
//         <button onClick={reset}> reset </button>
//     </div>

// );



// // Display it to the console, it takes two arguments the first is the JSX you would like to render
// // and the second is where you would like to render it
// ReactDOM.render(templateTwo, appRoot);

// To show updated data , must re-render the template so have to write another a function
const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1> Count: {count} </h1>
            <button onClick={addOne}> +1 </button> 
            <button onClick={minusOne}> -1 </button>
            <button onClick={reset}> reset </button>  
        </div>    
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();