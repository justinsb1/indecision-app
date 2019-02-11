import React from 'react';

// export the class

// AddOption component
export default class AddOption extends React.Component {
    // set up component state - tracks error message. by default there will be no error
    state = {
        // THE HANDLADDOPTION FORM WILL RETURN UNDEFINED BACK IF EVERYTHING IS OK
        erorr: undefined
    };
   
    // PROPS MEAN IT COMES FROM PARENT
    // submit function event handler 
    handleAddOption = (e) => {
        // prevents full page refresh
        e.preventDefault();
        // get the options from the form element
        const option = e.target.elements.option.value.trim();
        // check if there is a value that was submitted
        
        // this handleAddOption is passed from Parent and it manipulates the state of the data
        // passes the option up the parent function
        // code for a potential error
        const error = this.props.handleAddOption(option);
        
        // // show error to the screen 
        // this.setState(() => {
        //     return {
        //         error: error
        //     };
        // });

        //shorthand for implicitly calling setState
        // returns the error message by changing the state
        this.setState(() => ({ error: error }));

        // if there was no error, clear the form. else give them another chance
        if(!error) {
            e.target.elements.option.value = '';
        } 
    };

    // undefined is false so if no errror , continue code
    render () {
        return (
            <div>
                {this.state.error && <p className="add-option-error"> {this.state.error} </p>}
                <form 
                className="add-option"
                onSubmit={this.handleAddOption}
                > 
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button"> Add Option </button>
                </form>
            </div>
        );
    }
}