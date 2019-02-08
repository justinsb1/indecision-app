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


// acess the unique div from html by fetching the element 
const appRoot = document.getElementById('app');

// create an array
const numbers = [55, 101, 1000];


const renderTemplateApp = () => {

    const template = (
        <div> 
            <h1> {app.title} </h1> 
            { app.subtitle && <p> {app.subtitle} </p> }
            <p> { app.options.length > 0 ? 'Here are your options' : 'No options' } </p> }
            <p> {app.options.length} </p>
            <button onClick={removeAll}> Remove all Options </button>
            {
                // when creating an array inside JSX must give each item an identifier so JSX can keep track of each item and be 
                // able to render and rerender 
                // [<p key="1"> a </p>, <p key="2"> b </p>, <p key="3"> c </p>]

                /*
                // create a dynamic array that 
                numbers.map((number) => {
                    // return JSX  . number is the label and inject JSX expression 
                    // set up key property so React can optimize rendering of application
                    return <p key={number}> Number: {number} </p>;
                })
                */
            }
            <ol>
                {/*   
                <li> Item one </li>
                <li> Item two </li> 
                */}

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