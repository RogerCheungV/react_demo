import React from 'react';

function createCustomInput(props) {
    let textInput = null;

    function setVal() {
        textInput.value = 100;
    }

    return (
        <div>
            <input
                type="text"
                ref={input => { textInput = input }} />
            <input type="button"
                value="Set the text default value"
                onClick={setVal} />
        </div>
    )
}

export default createCustomInput;