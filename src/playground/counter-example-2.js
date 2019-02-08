// RECREATE COUNTER APP USING COMPONENT STATES

// count to take prop counts . setup default prop value to 0. 

class Counter extends React.Component {
    // Bind this 
    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.subtractOne = this.subtractOne.bind(this);
        this.resetCount = this.resetCount.bind(this);
        // set up default state value
        this.state = { 
            count: props.count
        };

    }

    // create three methods to handle button clicks
    addOne() {
        // setState changes only the specific values you specify
        // add one to count , use setState that takes in a function to define the changes
        // when inside update function (prevState) is the data before any changes are applied
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    subtractOne() {
        // change state of this method
        this.setState((prevState) => {
            return{
                count: prevState.count - 1 
            };
        });
    }

    resetCount() {
        // Don't need the prevState of the value cause you're resetting it regardless
        this.setState(() => {
            return{
                count: 0
            };
        });
    }

    render() {
        return(
            <div>
                <h1> Count: {this.state.count}</h1>
                <button onClick={this.addOne}> +1 </button>
                <button onClick={this.subtractOne}> -1 </button>
                <button onClick={this.resetCount}> reset </button>  
            </div>
        )
    }
}

// COUNTER DEFAULT PROPS
Counter.defaultProps = {
    // default count value
    count: 0
}





ReactDOM.render(<Counter />, document.getElementById('app'));