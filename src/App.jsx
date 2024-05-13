import React from 'react';
import Output from "./components/Output";
import Input from "./components/Input"
import ButtonGroup from "./components/ButtonGroup"
import "./App.css"

const App = () => {
    return (
        <div className='App app-container '>
            {/* <h1 className='app-title '>Mini Calculator</h1> */}
            <div className="calculator-container">
                <Output />
                <Input />
                <ButtonGroup />
            </div>

        </div>
    )
}

export default App;
