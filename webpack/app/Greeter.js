// const data = require('./config.json');

// module.exports = function(){
//     var greet = document.createElement('div');
//     greet.textContent = data.greetText;
//     return greet;
// }


import React ,{Component} from 'react';
import config from './config.json';

import './Greeter.scss';

class Greeter extends Component{
    render(){
        return(
            <div>
                {config.greetText}
            </div>
        );
    }
}

export default Greeter;