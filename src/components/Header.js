import React from 'react';




// HEADER STATELESS COMPONENT
const Header = (props) => 
    (
        <div className="header">
            <div className="container">
                <h1 className="header__title"> {props.title} </h1>
                {/* CONDITOINAL - if there is a subtitle then render subtitle */}
                {props.subtitle && <h2 className="header__subtitle"> {props.subtitle} </h2>}
            </div>
        </div>
    );



// DEFINE DEFAULT PROP VALUES FOR HEADER CLASS - define these after they have been defined. defaultProps is an obj.
Header.defaultProps = {
    title: 'Indecision App'
}


export default Header; 