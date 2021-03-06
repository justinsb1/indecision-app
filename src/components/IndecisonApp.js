import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';




// create a PARENT COMPONENTS
// use props to pass data between components 
export default class IndecisionApp extends React.Component {

    // set up component state
    state = {
        options: [],
        // track selected option. starts off as undefined. shows when they click what should i do  button
        selectedOption: undefined
    };
    
        
    /* METHODS DEFINED INSIDE PARENT FUNCTION ARE USED AS EVENT HANDLERS (onClick). etc. */

    // sets the state of the modal back to undefined so that it closes
    handleCloseModal = () => {
        this.setState(() => ({selectedOption: undefined}));
    };

    // Delete the options function which is passed into child component and being called there
    handleDeleteOptions = () => {
        // this.setState(() => {
        //     return {
        //         options: [] 
        //     };
        // });

        // You can implicitly return an object using shorthand arrow functions this way
        this.setState(() => ({ options: [] }));
    };

    // A method responsible for taking in an option and using setState to remove it
    // call option in parameters for setting it to the individual option 
    handleDeleteOption = (optionToRemove) => {
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
    };

        

    // Actions component needs to let Parent function know if someone has selected an option
    handlePick = () => {      
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const selectedOption = this.state.options[randomNum];
        // set the state
        this.setState(() => ({
            selectedOption: selectedOption
        }));
    };

    // add Options to options array. 
    handleAddOption = (option) => {
        if (!option) {
            // error message
            return 'Enter valid value to add item';
        } 
            // Code to prevent duplicate options (will return -1 if it doesn't exist)
            else if (this.state.options.indexOf(option) > -1) {
                // error message
                return 'This option already exists';
            }
            // // equivalent to else 
            // this.setState((prevState) => {
            //     return {
            //         // array concat method allow you to add items to array without messing with other array items
            //         options: prevState.options.concat(option)
            //     };
            // });

            //  WILL GET UNDEFINED BACK IF EVERYTHING GOES WELL
            //shorthand for implicitly calling setState. 
            this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    };

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
                <div className="container">
                    <Action 
                    /* explicitly define a method named hasOptions */
                    hasOptions = {this.state.options.length > 0}
                    /* pass these methods down into option from parent component */
                    handlePick = {this.handlePick}
                    />
                    <div className="widget">
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
                </div>
                <OptionModal 
                    selectedOption = {this.state.selectedOption}
                    handleCloseModal = {this.handleCloseModal}
                />
            </div>
            );
        }
    }

