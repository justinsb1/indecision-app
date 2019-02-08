'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        // state is used to store things that can change
        _this.state = {
            options: props.options
        };
        return _this;
    }

    // Delete the options function which is passed into child component and being called there


    _createClass(IndecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }

        // Actions component needs to let Parent function know if someone has selected an option

    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var selectedOption = this.state.options[randomNum];
            alert(selectedOption);
        }

        // add Options to options array. 

    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid value to add item';
            }
            // Code to prevent duplicate options (will return -1 if it doesn't exist)
            else if (this.state.options.indexOf(option) > -1) {
                    return 'This option already exists';
                }
            // equivalent to else 
            this.setState(function (prevState) {
                return {
                    // array concat method allow you to add items to array without messing with other array items
                    options: prevState.options.concat(option)
                };
            });
        }

        // children functions cannot pass props up to parent functions
        // so you have to pass functions in as props to reverse flow Options

    }, {
        key: 'render',
        value: function render() {

            var subtitle = "Put your life in the hands of a computer.";

            // Options component has 2 props on it (options & handleDeleteOptions). 
            // (this.state.options) is used on Options component so that the array from constructor can be used.
            // this return returns all the child classes by IndecisionApp class
            // On Header - title is a prop that you want to pass information into so that it can be used in the Header class
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

// DEFAULT PROPS FOR INDECISION CLASS


IndecisionApp.defaultProps = {
    options: []

    // UP ABOVE first options is whatever you want to name it and then {} references title from IndecisionApp


    // HEADER STATELESS COMPONENT
};var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            ' ',
            props.title,
            ' '
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            ' ',
            props.subtitle,
            ' '
        )
    );
};

// DEFINE DEFAULT PROP VALUES - define these after they have been defined. defaultProps is an obj
Header.defaultProps = {
    title: 'Indecision App'

    // convert an class Action to a stateless component instead of React component
    // to pass props into stateless component , use the arguments. doesn't require (this) keyword.
};var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions
            },
            'What should I do?'
        )
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

// OPTIONS STATELESS COMPONENT - setup options prop for Options commment. Display length of array
var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            ' Remove All Options'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, { key: option, optionText: option });
        })
    );
};

// OPTION STATELESS COMPONENT
var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        'Option: ',
        props.optionText
    );
};

// AddOption component

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    //anytime using (this) inside of a function must use a constructor
    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        // set up component state
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    // submit function event handler


    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            // prevents full page refresh
            e.preventDefault();
            // get the options from the form element
            var option = e.target.elements.option.value.trim();
            // check if there is a value that was submitted

            // this handleAddOption is passed from Parent and it manipulates the state of the data
            var error = this.props.handleAddOption(option);

            // show error to the screen 
            this.setState(function () {
                return {
                    error: error
                };
            });
        }

        // undefined is false so if no errror , continue code

    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    ' ',
                    this.state.error,
                    ' '
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        ' Add Option '
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

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


ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));

// // can go ahead and define options prop to contain certain values
// ReactDOM.render(<IndecisionApp options={['1', '2', '3']}/>, document.getElementById('app'));
