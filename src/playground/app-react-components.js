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


// create a PARENT COMPONENTS
// use props to pass data between components 
class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            title: 'Indecision App',
            subtitle: 'Put your life in the hands of a computer',
            options: ['1', '2', '3', '4']
        }
    }

    // Delete the options function which is passed into child component and being called there
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
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
            // equivalent to else 
            this.setState((prevState) => {
                return {
                    // array concat method allow you to add items to array without messing with other array items
                    options: prevState.options.concat(option)
                };
            });
    }

    // children functions cannot pass props up to parent functions
    // so you have to pass functions in as props to reverse flow Options
    render () {
        // Options component has 2 props on it (options & handleDeleteOptions). 
        // (this.state.options) is used on Options component so that the array from constructor can be used.
        // this return returns all the child classes by IndecisionApp class
        // On Header - title is a prop that you want to pass information into so that it can be used in the Header class
        return (
            <div>
                <Header title = {this.state.title} subtitle={this.state.subtitle} />
                <Action 
                hasOptions = {this.state.options.length > 0}
                handlePick = {this.handlePick}
                />
                <Options 
                    options = {this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                />
                <AddOption 
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}

// UP ABOVE first options is whatever you want to name it and then {} references title from IndecisionApp

// extends React gives us all the features of React. it requires one method to be defined
class Header extends React.Component{
    // React Component you must define render
    render() {
        return (
            <div>
                <h1> {this.props.title} </h1>
                <h2> {this.props.subtitle} </h2>
            </div>
        )
    }
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

// Options component - setup options prop for Options commment. Display length of array
class Options extends React.Component {
 

    render () {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}> Remove All Options</button>
                {/* render Option component inside of Options component which takes in a prop (optionText) that can be accessed by class Option, key gives each option and unique identifier*/}
                {/* this arrow function returns the Option class for each individual option*/}
                    {   
                        this.props.options.map((option) => <Option key={option} optionText={option} />)
                    }
            </div>
        );
    }
}

// Option component
class Option extends React.Component {

    render () {
        return (
            <div>
                Option: {this.props.optionText}          
            </div>
        );
    }
}

// AddOption component
class AddOption extends React.Component {
    //anytime using (this) inside of a function must use a constructor
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        // set up component state
        this.state = {
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
        
        // show error to the screen 
        this.setState(() => {
            return {
                error: error
            };
        });
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
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
