// Import React y ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';


// Crear un componente React
const App = () => {
    return (
        <div>
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            <input type="text" id="name"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>Submit</button>
        </div>
    );
};

// Mostrar component
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);