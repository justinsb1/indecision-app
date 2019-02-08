// Visibility Component - render , constructor , onclick
// state is visibility 


console.log("App.js is running!");


const app = {
    title: 'Visibility Toggle',
    details: 'Hey. These are some details you can now see!'
};

const showDetails = () => {
    // take current boolean value and flip it
    visibility = !visibility;
    renderVisibleApp();
}

// create visbile variable 
let visibility = false;

// acess the unique div from html by fetching the element 
const appRoot = document.getElementById('app');


const renderVisibleApp = () => {

    const visibleApp = (
        <div>

            <h1> {app.title} </h1>
            <button onClick={showDetails}> {visibility ? 'Hide details' : 'Show details'} </button>

            
            {visibility && (
                <div>
                    <p> Hey. These are some details you can now see </p>
                </div>
            )}
            

        </div>
            
    );

     // render the app
     ReactDOM.render(visibleApp, appRoot);

};

renderVisibleApp();