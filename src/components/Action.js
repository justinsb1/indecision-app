import React from 'react';



// convert an class Action to a stateless component instead of React component
// to pass props into stateless component , use the arguments. doesn't require (this) keyword.

// const Action = (props) => {
//     return (
//             <div>
//                 <button 
//                     onClick={props.handlePick}
//                     disabled={!props.hasOptions}
//                 >
//                     What should I do? 
//                 </button> 
//             </div>
//     );
// };

// ====== better shorthand for arrow function

const Action = (props) => 
    (
            <div>
                <button
                    className="big-button" 
                    onClick={props.handlePick}
                    disabled={!props.hasOptions}
                >
                    What should I do? 
                </button> 
            </div>
    );



export default Action;