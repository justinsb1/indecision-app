// REBUILD VISIBILITY APP USING COMPONENTS AND COMPONENT STATE
// state is visibility 


class Visibility extends React.Component {

    // Bind everything
    constructor(props){
        super(props);
        this.showDetails = this.showDetails.bind(this);
        this.state = {
            title: 'Indecision App',
            visibility: false
        };
    }

    showDetails() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return(
                <div>
                    <h1> {this.state.title} </h1>
                    <button onClick={this.showDetails}> {this.state.visibility ? 'Hide details' : 'Show details'} </button>

                    {this.state.visibility && (
                        <div>
                            <p> Hey. These are some details you can now see </p>
                        </div>
                    )}           
                </div>
        )
    }

}






ReactDOM.render(<Visibility />, document.getElementById('app'));