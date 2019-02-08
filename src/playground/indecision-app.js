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
        renderTemplateApp();
    }
};

// create a remove all function 
const removeAll = () => {
    app.options = [];
    renderTemplateApp();
};

// create onMakeDecision function which randomly picks an option from the array
const onMakeDecision = () => {
    // create random number varibale - the random function generates a number between 0 and 1. could never be 1
    const randomNum = Math.floor(Math.random() * app.options.length);
    // create a variable for the selected option
    const selectedOption = app.options[randomNum];
    // display the option to the screen
    alert(selectedOption);
};

// acess the unique div from html by fetching the element 
const appRoot = document.getElementById('app');


const renderTemplateApp = () => {

    const template = (
        <div> 
            <h1> {app.title} </h1> 
            { app.subtitle && <p> {app.subtitle} </p> }
            <p> { app.options.length > 0 ? 'Here are your options' : 'No options' } </p> }
          
            <button onClick={removeAll}> Remove all Options </button>

            <button disabled={app.options.length === 0} onClick={onMakeDecision}> What should I do? </button>
         
            <ol>

                {/* map over app.options getting back an array of li's (set key and text ) */}
                {
                    app.options.map((option) => {
                        return <li key={option}> Option: {option} </li>
                    })
                }

            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/> 
                <button> Add Option </button>
            </form>
        </div>
    );
    // render the app
    ReactDOM.render(template, appRoot);

};

renderTemplateApp();