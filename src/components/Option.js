import React from 'react';


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

export default Option;