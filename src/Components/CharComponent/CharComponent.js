import React from 'react';
import Radium from 'radium';

const CharComponent = (props) => {
    const style = {
        display: 'inline-block',
        border: '1px solid black',
        padding: '16px',
        margin : '16px',
        ':hover': {
            backgroundColor: 'lightgreen',
            color: 'blue'
          }
      };
      onclick=props

    return(
        <div className="salida" style={style}>
            <p type= "text"  onClick={props.click}>{props.name}</p>
        </div>
    );
}

export default Radium(CharComponent);