// CREATE AN APP USING COMPONENTS

// const obj = {
//     name: 'Allen',
//     getName() {
//         return this.name;
//     }
// };
// // using bind you can set the context of (this)
// const getName = obj.getName.bind(obj);

// console.log(getName());

/* USE PROPS TO CALL SOMETHING BEING PASSED DOWN */


// create a PARENT COMPONENTS
// use props to pass data between components 
class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        // state is used to store things that can change
        this.state = {
            // use props here because options was defined as a default prop below
            options: []
        };
    }    
        
// LIFECYCLE METHOD - fires when the component first get mounted to the DOM. ONLY HAVE ACCESS IN OUR CLASS BASED COMPONENTS
componentDidMount() {
  
    // make sure that only valid expressions are being entered into JSON
    try {
            // reads the data
            const json = localStorage.getItem('options');
            // turns the saved string data into a real object so that we can do things with it 
            const options = JSON.parse(json);
        if(options) {
            // return an object that updates options to the options array
            // can also just replace (options: options) with options because it is a property whose value is coming from a variable with same name
            // this will return the same array even after you refresh the array
            this.setState(() => ({ options: options }));
        }
    } catch (e) {
            // Do nothing at all
        }
}

// ANOTHER LIFECYCLE METHOD - fires after component updates (after state changes or props changes)
componentDidUpdate(prevProps, prevState) { 
    // only fires when the length of the array actually changes. 
    if (prevState.options.length !== this.state.options.length) {
        // turns the object options into a string because localStroage can only save strings
        const json = JSON.stringify(this.state.options);
        // saves the data in localStorage, options is the key and json is the values
        localStorage.setItem('options', json);
        console.log('saving data');
    }  
}

// LIFECYCLE METHOD - fires when before a component goes away
componentWillUnmount() {
    console.log('component will unmount');
}


    /* METHODS DEFINED INSIDE PARENT FUNCTION ARE USED AS EVENT HANDLERS (onClick). etc. */

    // Delete the options function which is passed into child component and being called there
    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options: [] 
        //     };
        // });

        // You can implicitly return an object using shorthand arrow functions this way
        this.setState(() => ({ options: [] }));
    }

    // A method responsible for taking in an option and using setState to remove it
    // call option in parameters for setting it to the individual option 
    handleDeleteOption(optionToRemove) {
        /* console.log('blah', option); <- used to debug */

        // implicitly passing a function into setState
        this.setState((prevState) => ({
            // options is the piece of state we want to update and we need its previous state
            /* filter is an array method that takes in a function like map or forEach. it just 
            returns an array with the filter applied */
            options: prevState.options.filter((option) => {
                /* returning true means that it will stay in the array */
                /* return an array with the options that are not equal to true meaning we keep an array with the 
                options we don't want to delete */
                return optionToRemove !== option;
            })
        }));
    }

        

    // Actions component needs to let Parent function know if someone has selected an option
    handlePick() {      
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const selectedOption = this.state.options[randomNum];
        alert(selectedOption);
    }

    // add Options to options array. 
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } 
            // Code to prevent duplicate options (will return -1 if it doesn't exist)
            else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists';
            }
            // // equivalent to else 
            // this.setState((prevState) => {
            //     return {
            //         // array concat method allow you to add items to array without messing with other array items
            //         options: prevState.options.concat(option)
            //     };
            // });

            //shorthand for implicitly calling setState
            this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    // children functions cannot pass props up to parent functions
    // so you have to pass functions in as props to reverse flow Options
    render () {

        const subtitle = "Put your life in the hands of a computer.";

        // Options component has 2 props on it (options & handleDeleteOptions). 
        // (this.state.options) is used on Options component so that the array from constructor can be used.
        // this return returns all the child classes by IndecisionApp class
        // On Header - title is a prop that you want to pass information into so that it can be used in the Header class
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                /* explicitly define a method named hasOptions */
                hasOptions = {this.state.options.length > 0}
                /* pass these methods down into option from parent component */
                handlePick = {this.handlePick}
                />
                <Options 
                    /* pass these methods down into option from parent component */
                    options = {this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption 
                    /* pass these methods down into option from parent component */
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}

// // DEFAULT PROPS FOR INDECISION CLASS
// IndecisionApp.defaultProps = {
//     options: []
// }

// UP ABOVE first options is whatever you want to name it and then {} references title from IndecisionApp


// HEADER STATELESS COMPONENT
const Header = (props) => {
    return (
        <div>
            <h1> {props.title} </h1>
            {/* CONDITOINAL - if there is a subtitle then render subtitle */}
            {props.subtitle && <h2> {props.subtitle} </h2>}
        </div>
    );
};

// DEFINE DEFAULT PROP VALUES FOR HEADER CLASS - define these after they have been defined. defaultProps is an obj.
Header.defaultProps = {
    title: 'Indecision App'
}



// convert an class Action to a stateless component instead of React component
// to pass props into stateless component , use the arguments. doesn't require (this) keyword.
const Action = (props) => {
    return (
            <div>
                <button 
                    onClick={props.handlePick}
                    disabled={!props.hasOptions}
                >
                    What should I do? 
                </button> 
            </div>
    );
};

// // action button component
// class Action extends React.Component {

//     // (this) points to the component class instance
//     // props means it comes from PARENT Component not inside of class Action
//     // onClick is an event that run the parent Method when triggered
//     render() {
//         return (
//             <div>
//                 <button 
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >
//                     What should I do? 
//                 </button> 
//             </div>
//         );
//     }
// }

// OPTIONS STATELESS COMPONENT - setup options prop for Options commment. Display length of array.

const Options = (props) => {
    return (
            <div>
                <button onClick={props.handleDeleteOptions}> Remove All Options</button>
                {props.options.length === 0 && <p> Please add an option to get started</p>}
                {/* render OPTION component inside of OPTIONS component which takes in a prop (optionText) that can be accessed by class Option, key which gives each option an unique identifier*/}
                {/* this arrow function returns the Option class for each individual option*/}
                    {   
                        props.options.map((option) => (
                            <Option 
                            key={option} 
                            optionText={option} 
                            /* We are passing handleDeleteOption method from PARENT component into Options child component and then it is passed into Option child component */
                            handleDeleteOption={props.handleDeleteOption}
                            />
                    ))
                    }
            </div>
    );
};

// OPTION STATELESS COMPONENT
const Option = (props) => {
    return (
        <div>
            Option: {props.optionText} 

            {/* Set up remove button to show on each individual option */} 
            {/* Set up remove button to show on each individual option */} 
            {/* onClick={props.handleDeleteOption. Cannot just pass the data up like this. */}
            {/* must define inline arrow function and explicitly pass it up to the handleDeleteOption method */}
            <button 
            onClick = {(e) => {
                props.handleDeleteOption(props.optionText);
            }}
            > 
            remove 
            </button>
        </div>
    );
};



// AddOption component
class AddOption extends React.Component {
    //anytime using (this) inside of a function must use a constructor
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        // set up component state
        this.state = {
            // invalid input
            error: undefined
        };
    }

    // submit function event handler
    handleAddOption(e) {
        // prevents full page refresh
        e.preventDefault();
        // get the options from the form element
        const option = e.target.elements.option.value.trim();
        // check if there is a value that was submitted
        
        // this handleAddOption is passed from Parent and it manipulates the state of the data
        const error = this.props.handleAddOption(option);
        
        // // show error to the screen 
        // this.setState(() => {
        //     return {
        //         error: error
        //     };
        // });

        //shorthand for implicitly calling setState
        this.setState(() => ({ error: error }));

        // if there was no error, clear the form. else give them anotehr chance
        if(!error) {
            e.target.elements.options.value = '';
        } 
    }

    // undefined is false so if no errror , continue code
    render () {
        return (
            <div>
                {this.state.error && <p> {this.state.error} </p>}
                <form onSubmit={this.handleAddOption}> 
                    <input type="text" name="option"/>
                    <button> Add Option </button>
                </form>
            </div>
        );
    }
}

// // function syntax
// const User = function () {

// }

// // stateless component syntax - still can pass in props. Are to be used when just need to show some information
// const User = () => {
//     return (
//         <div>
//             <p> Name: </p>
//             <p> Age: </p> 
//         </div>
//     );
// };


// instead of rendering a variable, you can compose a React Component
// can go ahead and define options prop to contain certain values
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


// // can go ahead and define options prop to contain certain values
// ReactDOM.render(<IndecisionApp options={['1', '2', '3']}/>, document.getElementById('app'));


