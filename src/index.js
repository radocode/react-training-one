// Import React y ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';


// Crear un componente React
const App = () => {
    return <div>Hi there!</div>;
};

// Mostrar component
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);