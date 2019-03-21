import React from 'react';
import Radium from 'radium';


const ValidationComponent = (props) => {
    let validation='';
        if (props.longitud < 5) {
            validation="Demasiado corto"
            
        }else{validation="suficientemente largo"}
        const style = {
            ':hover': {
                backgroundColor: 'yellow',
                color: 'blue'
              }
            };
        
        
        return(<p className="SalidaValidation" style={props.style}>{validation}</p>);
}

export default Radium(ValidationComponent);