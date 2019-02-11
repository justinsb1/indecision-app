import React from 'react';




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


export default Header; 