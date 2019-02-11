import React from 'react';
import Option from './Option';




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

export default Options;