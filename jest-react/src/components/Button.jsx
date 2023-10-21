import React from 'react';

function Button ({ onclick, label }) {

    return (
        <button onClick={onclick}>{label}</button>
    );
}

export default Button;