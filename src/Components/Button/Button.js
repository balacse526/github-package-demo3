import React from 'react';

function Button(props) {
    const {children, style, onClick} = props
    return(
        <div>
           <button onClick={onClick}>{children}</button>
        </div>
          
    )
}

export default Button