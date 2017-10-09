var React = require('react');
var Popular= require('./Popular');
var Kuku = require('./Kuku');

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Popular />
            </div>
        )
    }
}

module.exports = App;