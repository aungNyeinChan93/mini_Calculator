import React from 'react';
import Output from "./components/Output";
import Input from "./components/Input"
import ButtonGroup from "./components/ButtonGroup"
import "./App.css";
import { useState } from 'react';

const App = () => {
    let [output, setOutput] = useState(0);
    let [input, setInput] = useState(0);

    
    function clickEventHandler(value) {
        // console.log("this is handeler" , value);
        // console.log(typeof value);
        // setInput(value);
        // setOutput(value)

        switch (value) {
            case "C":
                setInput("");
                setOutput("")
                break;
            case "~":
                if (input !== output) {
                    input.length !== 1 ? setInput(input.slice(0, input.length - 1)) : setInput(output);
                }
                break;
            case "=":
                setOutput( () => eval(input));
                setInput(input)
                break;
                default:
                    input !== "0" ? setInput(input += value) : setInput(value);
                break;
            };
        };
        
        return (
        <div className='App app-container '>
            {/* <h1 className='app-title '>Mini Calculator</h1> */}
            <div className="calculator-container">
                <Output output={output} />
                <Input input={input} />
                <ButtonGroup clickEventHandler={clickEventHandler} />
            </div>
        </div>
    )
}

export default App;

