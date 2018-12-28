import React, {Component} from 'react';
import Posts from './Posts';
import Postform from './Postform';
import '../css/reset.css';
import '../css/styles.css';

class App extends Component {
    render () {
        return (
            <div className="react-app">
                <Postform />
                <hr/>
                <Posts />
            </div>
        )
    }
}

export default App;