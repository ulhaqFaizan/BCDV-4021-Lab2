import React from 'react';

function MyComponent(props) {

    const element = <h1>Hello, JSX!</h1>
    const link = <a href='https://google.com'>Visit Link</a>

    const handleClick = function () {
        alert ('Hello React!')
    }
    // const handleClick = () {
    //     alert ('Hello React!')
    // }

    // let message = ''
    // if(isLoad) {
    //     message = "Loading"
    // }
    // else {
    //     message = "completed"
    // }

  return <>
    <h1>Hello, React!</h1>
    {element}
    {link}

    <button onClick={handleClick}>{props.message}</button>

  </>
}

export default MyComponent;