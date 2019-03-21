import React from 'react';

const UserInput = (props) => {
    return(
        <div id="container">
         <input type="text" onChange={props.changed} value={props.currentName} />
        </div>
       
    );
}

export default UserInput;
