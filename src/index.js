import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay';
import Spinner from './spinner';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position.coords),
//         (err) => console.log(err)
//     );
//     return <div>Latitude:</div>
// }

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude })
            },
            err => {
                this.setState({ errorMessage: err.message })
            }
        );
    }
    render() {
        let latStyle = {
            fontSize: '20px',
            color: 'Green',
            textDecoration: 'underline'
        }
        if (this.state.errorMessage && !this.state.lat) {
            return <div>  Error: {this.state.errorMessage}</div>;
        }
        if (this.state.errorMessage != null && this.state.lat != null) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <div><Spinner message="Please accept Location Request" /></div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));