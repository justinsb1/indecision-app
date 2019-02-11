import React from 'react';

// export the class

// AddOption component
export default class AddOption extends React.Component {
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