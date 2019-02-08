console.log("App.js is running!");



// create an app object with two properties title/subtitle
// use title in h1 and subtitle in p 
// render template
// only render the subtitle (and p tag) if subtitle exist - logical && operator
// conditionally render new p tag - if options.length > 0 "Here are your options" if not then "No options" - turnary operator
const app = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: []
};

// function for the form event, e is a form object
const onFormSubmit = (e) => {
    // prevents full page refresh
    e.preventDefault();
    // get the value that the user submits, create a var for the element that the event started on
    // e has methods to get the element the user submits and they are referenced by name
    const option = e.target.elements.option.value;
    // check if there is a value that was submitted
    if (option) {
        // add to the array
        app.options.push(option);
        // wipe the inputs
        e.target.elements.option.value = '';
    }
};

// JSX - JavaScript XML - A JavaScript syntax extension  
// Can only have two elements together if they are inside of a div (wrapper div)
// on the form event you reference a function that you want to have fired for that event
const template = (
    <div> 
        <h1> {app.title} </h1> 
        { app.subtitle && <p> {app.subtitle} </p> }
        <p> { app.options.length > 0 ? 'Her are your options' : 'No options' } </p> }
        <p> {app.options.length} </p>
        <ol>
            <li> Item one </li>
            <li> Item two </li> 
        </ol>
        <form onSubmit={onFormSubmit()}>
            <input type="text" name="option"/> 
            <button> Add Option </button>
        </form>
    </div>
);

// acess the unique div from html by fetching the element 
const appRoot = document.getElementById('app');

// render the application
ReactDOM.render(template, appRoot);

const renderTemplateApp = () => {



};
