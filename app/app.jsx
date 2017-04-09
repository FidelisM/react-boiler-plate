import React from 'react';
import ReactDOM from 'react-dom';
import {Greeter} from "Components/Greeter";

const message = 'This is boiler-plate code for a react app.';
ReactDOM.render(<Greeter message={message}/>, document.getElementById('app'));